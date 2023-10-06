package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.impl.query.FilterableImplementor;
import org.babyfish.jimmer.sql.ast.impl.query.SortableImplementor;
import org.babyfish.jimmer.sql.ast.impl.table.StatementContext;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.ast.impl.table.TableProxies;
import org.babyfish.jimmer.sql.ast.query.Filterable;
import org.babyfish.jimmer.sql.ast.query.MutableSubQuery;
import org.babyfish.jimmer.sql.ast.query.TypedSubQuery;
import org.babyfish.jimmer.sql.ast.table.AssociationTable;
import org.babyfish.jimmer.sql.ast.table.Props;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.TableEx;
import org.babyfish.jimmer.sql.ast.table.spi.TableProxy;
import org.babyfish.jimmer.sql.filter.CacheableFilter;
import org.babyfish.jimmer.sql.filter.Filter;
import org.babyfish.jimmer.sql.filter.Filters;
import org.babyfish.jimmer.sql.filter.impl.FilterArgsImpl;
import org.babyfish.jimmer.sql.runtime.ExecutionPurpose;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;

import java.util.*;

public abstract class AbstractMutableStatementImpl implements FilterableImplementor {

    private static final Predicate[] EMPTY_PREDICATE = new Predicate[0];

    private final JSqlClientImplementor sqlClient;

    private final ImmutableType type;

    private List<Predicate> predicates = new ArrayList<>();

    private Table<?> table;

    private TableImplementor<?> tableImplementor;

    private boolean frozen;

    public AbstractMutableStatementImpl(
            JSqlClientImplementor sqlClient,
            ImmutableType type
    ) {
        if (!type.isEntity()) {
            throw new IllegalArgumentException("\"" + type + "\" is not entity");
        }
        if (sqlClient != null && !sqlClient.getMicroServiceName().equals(type.getMicroServiceName())) {
            throw new IllegalArgumentException(
                    "The sql client and entity type \"" +
                            type +
                            "\" do not belong to the same micro service: " +
                            "{sqlClient: \"" +
                            sqlClient.getMicroServiceName() +
                            "\", entity: \"" +
                            type.getMicroServiceName() +
                            "\"}"
            );
        }
        this.sqlClient = sqlClient;
        this.type = type;
    }

    public AbstractMutableStatementImpl(
            JSqlClientImplementor sqlClient,
            TableProxy<?> table
    ) {
        if (table.__unwrap() != null) {
            throw new IllegalArgumentException("table proxy cannot be wrapper");
        }
        if (table.__prop() != null) {
            throw new IllegalArgumentException("table proxy must be root table");
        }
        this.sqlClient = Objects.requireNonNull(
                sqlClient,
                "sqlClient cannot be null"
        );
        if (!sqlClient.getMicroServiceName().equals(table.getImmutableType().getMicroServiceName())) {
            throw new IllegalArgumentException(
                    "The sql client and entity type \"" +
                            table.getImmutableType() +
                            "\" do not belong to the same micro service: " +
                            "{sqlClient: \"" +
                            sqlClient.getMicroServiceName() +
                            "\", entity: \"" +
                            table.getImmutableType().getMicroServiceName() +
                            "\"}"
            );
        }
        this.table = table;
        this.type = table.getImmutableType();
    }

    @SuppressWarnings("unchecked")
    public <T extends Table<?>> T getTable() {
        Table<?> table = this.table;
        if (table == null) {
            this.table = table = TableProxies.wrap(getTableImplementor());
        }
        return (T)table;
    }

    public TableImplementor<?> getTableImplementor() {
        TableImplementor<?> tableImplementor = this.tableImplementor;
        if (tableImplementor == null) {
            this.tableImplementor = tableImplementor =
                    TableImplementor.create(this, type);
        }
        return tableImplementor;
    }

    public Predicate getPredicate() {
        return predicates.isEmpty() ? null : predicates.get(0);
    }

    public abstract StatementContext getContext();

    public abstract AbstractMutableStatementImpl getParent();

    @Override
    public MutableSubQuery createSubQuery(TableProxy<?> table) {
        return sqlClient.createSubQuery(table);
    }

    @Override
    public <SE, ST extends TableEx<SE>, TE, TT extends TableEx<TE>> MutableSubQuery createAssociationSubQuery(
            AssociationTable<SE, ST, TE, TT> table
    ) {
        return sqlClient.createAssociationSubQuery(table);
    }

    public final boolean freeze() {
        if (frozen) {
            return false;
        }
        onFrozen();
        frozen = true;
        return true;
    }

    protected void onFrozen() {
        StatementContext ctx = getContext();
        if (ctx == null || !ctx.isFilterIgnored()) {
            Filter<Props> globalFilter = getSqlClient().getFilters().getFilter(type);
            if (globalFilter != null) {
                applyGlobalFilers();
            }
        }
        predicates = mergePredicates(predicates);
    }

    private void applyGlobalFilers() {
        if (this instanceof Ast) {
            ((Ast) this).accept(new ApplyFilterVisitor());
        } else {
            applyGlobalFiler(getTable());
        }
    }

    public void applyGlobalFiler(Table<?> table) {
        Filter<Props> globalFilter = getSqlClient().getFilters().getFilter(table.getImmutableType());
        if (globalFilter == null) {
            return;
        }
        if (globalFilter instanceof CacheableFilter<?>) {
            SortableImplementor sortableImplementor = this instanceof SortableImplementor ? (SortableImplementor) this : null;
            if (sortableImplementor != null) {
                sortableImplementor.disableSubQuery();
            }
            try {
                FilterArgsImpl<Props> args = new FilterArgsImpl<>(sortableImplementor, table, true);
                globalFilter.filter(args);
            } finally {
                if (sortableImplementor != null) {
                    sortableImplementor.enableSubQuery();
                }
            }
        } else {
            FilterArgsImpl<Props> args = new FilterArgsImpl<>(
                    this,
                    TableProxies.wrap(table),
                    false
            );
            globalFilter.filter(args);
        }
    }

    public void validateMutable() {
        if (frozen) {
            throw new IllegalStateException(
                    "Cannot mutate the statement because it has been frozen"
            );
        }
    }

    public JSqlClientImplementor getSqlClient() {
        return sqlClient;
    }

    @Override
    public Filterable where(Predicate ... predicates) {
        validateMutable();
        for (Predicate predicate : predicates) {
            if (predicate != null) {
                this.predicates.add(predicate);
            }
        }
        return this;
    }

    public ExecutionPurpose getPurpose() {
        return getContext().getPurpose();
    }

    public boolean isSubQueryDisabled() {
        return false;
    }

    protected static List<Predicate> mergePredicates(List<Predicate> predicates) {
        if (predicates.size() < 2) {
            return predicates;
        }
        return Collections.singletonList(
                Predicate.and(
                        predicates.toArray(EMPTY_PREDICATE)
                )
        );
    }

    private class ApplyFilterVisitor extends AstVisitor {

        private Set<TableImplementor<?>> tableImplementors = new HashSet<>();

        public ApplyFilterVisitor() {
            super(new AstContext(sqlClient));
        }

        @Override
        public void visitTableReference(TableImplementor<?> table, ImmutableProp prop) {
            applyGlobalFiler(tableImplementor);
        }
    }
}
