package org.babyfish.jimmer.sql.ast.query.specification;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.sql.ast.ComparableExpression;
import org.babyfish.jimmer.sql.ast.LikeMode;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.StringExpression;
import org.babyfish.jimmer.sql.ast.impl.AbstractMutableStatementImpl;
import org.babyfish.jimmer.sql.ast.impl.query.MutableSubQueryImpl;
import org.babyfish.jimmer.sql.ast.impl.table.TableProxies;
import org.babyfish.jimmer.sql.ast.query.MutableQuery;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.spi.TableProxy;

import java.util.Collection;

public class PredicateApplier {

    private Context context;

    public PredicateApplier(MutableQuery query) {
        AbstractMutableStatementImpl statement = (AbstractMutableStatementImpl) query;
        this.context = new Context(null, statement, null);
    }

    public void push(ImmutableProp prop) {
        Context ctx = this.context;
        if (prop.isAssociation(TargetLevel.PERSISTENT)) {
            this.context = new Context(
                    ctx,
                    prop.isReference(TargetLevel.PERSISTENT) ? ctx.statement() : null,
                    prop
            );
        } else {
            throw new IllegalArgumentException("\"" + prop + "\" is not association property");
        }
    }

    public void pop() {
        Context ctx = this.context;
        Context parentCtx = ctx.parent;
        if (parentCtx == null) {
            throw new IllegalStateException("No context to be pop");
        }
        this.context = parentCtx;
    }

    public AbstractMutableStatementImpl getQuery() {
        return this.context.statement();
    }

    public void eq(ImmutableProp[] props, Object value) {
        if (value == null) {
            return;
        }
        if (value instanceof String && ((String)value).isEmpty()) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            predicates[i] = ctx.table().get(props[i]).eq(value);
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    public void ne(ImmutableProp prop, Object value) {
        if (value == null) {
            return;
        }
        if (value instanceof String && ((String)value).isEmpty()) {
            return;
        }
        Context ctx = this.context;
        ctx.statement().where(ctx.table().get(prop).ne(value));
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public void gt(ImmutableProp prop, Object value) {
        if (value == null) {
            return;
        }
        Context ctx = this.context;
        ComparableExpression<Comparable<Comparable<?>>> expr = (ComparableExpression) ctx.table().get(prop);
        ctx.statement().where(expr.gt((Comparable<Comparable<?>>) value));
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public void ge(ImmutableProp prop, Object value) {
        if (value == null) {
            return;
        }
        Context ctx = this.context;
        ComparableExpression<Comparable<Comparable<?>>> expr = (ComparableExpression) ctx.table().get(prop);
        ctx.statement().where(expr.ge((Comparable<Comparable<?>>) value));
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public void lt(ImmutableProp prop, Object value) {
        if (value == null) {
            return;
        }
        Context ctx = this.context;
        ComparableExpression<Comparable<Comparable<?>>> expr = (ComparableExpression) ctx.table().get(prop);
        ctx.statement().where(expr.lt((Comparable<Comparable<?>>) value));
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public void le(ImmutableProp prop, Object value) {
        if (value == null) {
            return;
        }
        Context ctx = this.context;
        ComparableExpression<Comparable<Comparable<?>>> expr = (ComparableExpression) ctx.table().get(prop);
        ctx.statement().where(expr.le((Comparable<Comparable<?>>) value));
    }

    public void isNull(ImmutableProp[] props, boolean value) {
        if (!value) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            if (props[i].isAssociation(TargetLevel.ENTITY)) {
                predicates[i] = ctx.table().getAssociatedId(props[i]).isNull();
            } else {
                predicates[i] = ctx.table().get(props[i]).isNull();
            }
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    public void isNotNull(ImmutableProp[] props, boolean value) {
        if (!value) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            if (props[i].isAssociation(TargetLevel.ENTITY)) {
                predicates[i] = ctx.table().getAssociatedId(props[i]).isNotNull();
            } else {
                predicates[i] = ctx.table().get(props[i]).isNotNull();
            }
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    public void like(ImmutableProp[] props, String value, boolean insensitive, boolean matchStart, boolean matchEnd) {
        if (value == null || value.isEmpty()) {
            return;
        }
        LikeMode mode;
        if (matchStart && matchEnd) {
            mode = LikeMode.EXACT;
        } else if (matchStart) {
            mode = LikeMode.START;
        } else if (matchEnd) {
            mode = LikeMode.END;
        } else {
            mode = LikeMode.ANYWHERE;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            if (insensitive) {
                predicates[i] = ((StringExpression) ctx.table().<String>get(props[i])).ilike(value, mode);
            } else {
                predicates[i] = ((StringExpression) ctx.table().<String>get(props[i])).like(value, mode);
            }
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    public void notLike(ImmutableProp prop, String value, boolean insensitive, boolean matchStart, boolean matchEnd) {
        if (value == null || value.isEmpty()) {
            return;
        }
        LikeMode mode;
        if (matchStart && matchEnd) {
            mode = LikeMode.EXACT;
        } else if (matchStart) {
            mode = LikeMode.START;
        } else if (matchEnd) {
            mode = LikeMode.END;
        } else {
            mode = LikeMode.ANYWHERE;
        }
        Context ctx = this.context;
        Predicate predicate;
        if (insensitive) {
            predicate = ((StringExpression) ctx.table().<String>get(prop)).ilike(value, mode);
        } else {
            predicate = ((StringExpression) ctx.table().<String>get(prop)).like(value, mode);
        }
        ctx.statement().where(Predicate.not(predicate));
    }

    @SuppressWarnings("unchecked")
    public void valueIn(ImmutableProp[] props, Collection<?> values) {
        if (values == null || values.isEmpty()) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            predicates[i] = ctx.table().get(props[i]).in((Collection<Object>) values);
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    @SuppressWarnings("unchecked")
    public void valueNotIn(ImmutableProp prop, Collection<?> values) {
        if (values == null || values.isEmpty()) {
            return;
        }
        Context ctx = this.context;
        ctx.statement().where(ctx.table().get(prop).notIn((Collection<Object>) values));
    }

    @SuppressWarnings("unchecked")
    public void associatedIdEq(ImmutableProp[] props, Object associatedId) {
        if (associatedId == null) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            predicates[i] = ctx.table().getAssociatedId(props[i]).eq(associatedId);
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    @SuppressWarnings("unchecked")
    public void associatedIdNe(ImmutableProp prop, Object associatedId) {
        if (associatedId == null) {
            return;
        }
        Context ctx = this.context;
        ctx.statement().where(ctx.table().getAssociatedId(prop).ne(associatedId));
    }

    @SuppressWarnings("unchecked")
    public void associatedIdIn(ImmutableProp[] props, Collection<?> associatedIds) {
        if (associatedIds == null || associatedIds.isEmpty()) {
            return;
        }
        Context ctx = this.context;
        Predicate[] predicates = new Predicate[props.length];
        for (int i = predicates.length - 1; i >= 0; --i) {
            predicates[i] = ctx.table().getAssociatedId(props[i]).in((Collection<Object>) associatedIds);
        }
        ctx.statement().where(Predicate.or(predicates));
    }

    @SuppressWarnings("unchecked")
    public void associatedIdNotIn(ImmutableProp prop, Collection<?> associatedIds) {
        if (associatedIds == null || associatedIds.isEmpty()) {
            return;
        }
        Context ctx = this.context;
        ctx.statement().where(ctx.table().getAssociatedId(prop).notIn((Collection<Object>) associatedIds));
    }

    private static class Context {

        final Context parent;
        private AbstractMutableStatementImpl _statement;
        final ImmutableProp prop;
        private Table<?> _table;

        Context(
                Context parent,
                AbstractMutableStatementImpl statement,
                ImmutableProp prop
        ) {
            this.parent = parent;
            this._statement = statement;
            this.prop = prop;
            if (parent == null) {
                _table = statement.getTable();
            }
        }

        AbstractMutableStatementImpl statement() {
            AbstractMutableStatementImpl statement = this._statement;
            if (statement == null) {
                AbstractMutableStatementImpl parentStatement = parent.statement();
                MutableSubQueryImpl subQuery = null;
                if (parentStatement.getTable() instanceof TableProxy<?>) {
                    TableProxy<?> proxy = TableProxies.fluent(prop.getTargetType().getJavaClass());
                    if (proxy != null) {
                        subQuery = new MutableSubQueryImpl(parentStatement.getSqlClient(), proxy);
                    }
                }
                if (subQuery == null) {
                    subQuery = new MutableSubQueryImpl(parentStatement, prop.getTargetType());
                }
                subQuery.where(
                        parent.table().getId().eq(
                                subQuery.getTable().inverseGetAssociatedId(prop)
                        )
                );
                parentStatement.where(subQuery.exists());
                this._statement = statement = subQuery;
            }
            return statement;
        }

        Table<?> table() {
            Table<?> table = this._table;
            if (table == null) {
                if (prop.isReferenceList(TargetLevel.PERSISTENT)) {
                    table = statement().getTable();
                } else {
                    table = parent.table().join(prop);
                }
                this._table = table;
            }
            return table;
        }
    }
}
