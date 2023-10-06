package org.babyfish.jimmer.sql.filter.impl;

import org.babyfish.jimmer.impl.util.TypeCache;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.LogicalDeletedInfo;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.table.Props;
import org.babyfish.jimmer.sql.event.EntityEvent;
import org.babyfish.jimmer.sql.filter.CacheableFilter;
import org.babyfish.jimmer.sql.filter.Filter;
import org.babyfish.jimmer.sql.filter.FilterArgs;
import org.babyfish.jimmer.sql.runtime.LogicalDeletedBehavior;

import java.util.Collections;
import java.util.SortedMap;

abstract class LogicalDeletedFilterManager {

    private final TypeCache<Filter<Props>> cache =
            new TypeCache<>(this::createFilter, true);

    LogicalDeletedFilterManager() {}

    protected abstract Filter<Props> createFilter(ImmutableType type);

    public static LogicalDeletedFilterManager of(LogicalDeletedBehavior behavior) {
        switch (behavior) {
            case IGNORED:
                return Ignored.INSTANCE;
            case REVERSED:
                return Reversed.INSTANCE;
            default:
                return Default.INSTANCE;
        }
    }

    private static class Default extends LogicalDeletedFilterManager {

        static final Default INSTANCE = new Default();

        @Override
        protected Filter<Props> createFilter(ImmutableType type) {
            LogicalDeletedInfo info = type.getDeclaredLogicalDeletedInfo();
            return info != null ? new DefaultFilter(info) : null;
        }
    }

    private static class Ignored extends LogicalDeletedFilterManager {

        static final Ignored INSTANCE = new Ignored();

        @Override
        protected Filter<Props> createFilter(ImmutableType type) {
            return null;
        }
    }

    private static class Reversed extends LogicalDeletedFilterManager {

        static final Reversed INSTANCE = new Reversed();

        @Override
        protected Filter<Props> createFilter(ImmutableType type) {
            LogicalDeletedInfo info = type.getDeclaredLogicalDeletedInfo();
            return info != null ? new ReversedFilter(info) : null;
        }
    }

    private static class DefaultFilter implements CacheableFilter<Props>, FilterWrapper {

        protected final LogicalDeletedInfo info;

        private DefaultFilter(LogicalDeletedInfo info) {
            this.info = info;
        }

        @Override
        public Class<?> getFilterType() {
            return this.getClass();
        }

        @Override
        public ImmutableType getImmutableType() {
            return info.getProp().getDeclaringType();
        }

        @Override
        public void filter(FilterArgs<Props> args) {
            PropExpression<Object> expr = args.getTable().get(info.getProp().getName());
            switch (info.getNotDeletedAction()) {
                case NE:
                    if (info.isTwoOptionsOnly()) {
                        args.where(expr.eq(info.getRestoredValue()));
                    } else {
                        args.where(expr.ne(info.getValue()));
                    }
                    break;
                case IS_NOT_NULL:
                    args.where(expr.isNotNull());
                    break;
                case IS_NULL:
                    args.where(expr.isNull());
                    break;
            }
        }

        @Override
        public SortedMap<String, Object> getParameters() {
            return Collections.emptySortedMap();
        }

        @Override
        public boolean isAffectedBy(EntityEvent<?> e) {
            return e.isChanged(info.getProp());
        }
    }

    private static class ReversedFilter implements Filter<Props>, FilterWrapper {

        protected final LogicalDeletedInfo info;

        private ReversedFilter(LogicalDeletedInfo info) {
            this.info = info;
        }

        @Override
        public Class<?> getFilterType() {
            return this.getClass();
        }

        @Override
        public ImmutableType getImmutableType() {
            return info.getProp().getDeclaringType();
        }

        @Override
        public void filter(FilterArgs<Props> args) {
            PropExpression<Object> expr = args.getTable().get(info.getProp().getName());
            switch (info.getNotDeletedAction()) {
                case NE:
                    if (info.isTwoOptionsOnly()) {
                        args.where(expr.ne(info.getRestoredValue()));
                    } else {
                        args.where(expr.eq(info.getValue()));
                    }
                    break;
                case IS_NOT_NULL:
                    args.where(expr.isNull());
                    break;
                case IS_NULL:
                    args.where(expr.isNotNull());
                    break;
            }
        }
    }
}
