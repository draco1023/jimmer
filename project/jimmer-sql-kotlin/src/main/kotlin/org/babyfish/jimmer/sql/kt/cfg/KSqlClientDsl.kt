package org.babyfish.jimmer.sql.kt.cfg

import org.babyfish.jimmer.kt.DslScope
import org.babyfish.jimmer.kt.toImmutableProp
import org.babyfish.jimmer.meta.ImmutableProp
import org.babyfish.jimmer.sql.DraftInterceptor
import org.babyfish.jimmer.sql.EnumType
import org.babyfish.jimmer.sql.JSqlClient
import org.babyfish.jimmer.sql.cache.Cache
import org.babyfish.jimmer.sql.cache.CacheAbandonedCallback
import org.babyfish.jimmer.sql.cache.CacheConfig
import org.babyfish.jimmer.sql.cache.CacheFactory
import org.babyfish.jimmer.sql.dialect.Dialect
import org.babyfish.jimmer.sql.event.TriggerType
import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.cfg.impl.JavaCustomizer
import org.babyfish.jimmer.sql.kt.cfg.impl.JavaInitializer
import org.babyfish.jimmer.sql.kt.filter.KFilter
import org.babyfish.jimmer.sql.kt.filter.impl.toJavaFilter
import org.babyfish.jimmer.sql.kt.impl.KSqlClientImpl
import org.babyfish.jimmer.sql.meta.IdGenerator
import org.babyfish.jimmer.sql.runtime.*
import java.sql.Connection
import java.sql.PreparedStatement
import java.util.function.Function
import kotlin.reflect.KClass
import kotlin.reflect.KProperty1

@DslScope
class KSqlClientDsl internal constructor(
    val javaBuilder: JSqlClient.Builder
) {
    fun setDialect(dialect: Dialect) {
        javaBuilder.setDialect(dialect)
    }

    fun setDefaultEnumStrategy(strategy: EnumType.Strategy) {
        javaBuilder.setDefaultEnumStrategy(strategy)
    }

    fun setDefaultBatchSize(size: Int) {
        javaBuilder.setDefaultBatchSize(size)
    }

    fun setDefaultListBatchSize(size: Int) {
        javaBuilder.setDefaultListBatchSize(size)
    }

    fun setConnectionManager(block: ConnectionManagerDsl.() -> Unit) {
        javaBuilder.setConnectionManager(ConnectionManagerImpl(block))
    }

    fun setConnectionManager(connectionManager: ConnectionManager) {
        javaBuilder.setConnectionManager(connectionManager)
    }

    fun setSlaveConnectionManager(block: ConnectionManagerDsl.() -> Unit) {
        javaBuilder.setSlaveConnectionManager(ConnectionManagerImpl(block))
    }

    fun setSlaveConnectionManager(connectionManager: ConnectionManager) {
        javaBuilder.setSlaveConnectionManager(connectionManager)
    }

    fun setExecutor(executor: Executor?) {
        javaBuilder.setExecutor(executor)
    }

    fun setExecutor(block: ExecutorDsl.() -> Unit) {
        javaBuilder.setExecutor(ExecutorImpl(block))
    }

    fun setTransientResolverProvider(provider: TransientResolverProvider) {
        javaBuilder.setTransientResolverProvider(provider)
    }

    fun setIdGenerator(idGenerator: IdGenerator) {
        javaBuilder.setIdGenerator(idGenerator)
    }

    fun setIdGenerator(entityType: KClass<*>, idGenerator: IdGenerator) {
        javaBuilder.setIdGenerator(entityType.java, idGenerator)
    }

    fun addScalarProvider(scalarProvider: ScalarProvider<*, *>) {
        javaBuilder.addScalarProvider(scalarProvider)
    }

    fun addScalarProvider(prop: KProperty1<*, *>, scalarProvider: ScalarProvider<*, *>) {
        javaBuilder.addScalarProvider(prop.toImmutableProp(), scalarProvider)
    }

    fun addScalarProvider(prop: ImmutableProp, scalarProvider: ScalarProvider<*, *>) {
        javaBuilder.addScalarProvider(prop, scalarProvider)
    }

    fun setEntityManager(entityManager: EntityManager) {
        javaBuilder.setEntityManager(entityManager)
    }

    fun setCaches(block: CacheDsl.() -> Unit) {
        javaBuilder.setCaches {
            CacheDsl(it).block()
        }
    }

    fun setTriggerType(triggerType: TriggerType) {
        javaBuilder.setTriggerType(triggerType)
    }

    fun addFilters(vararg filters: KFilter<*>) {
        javaBuilder.addFilters(filters.map { it.toJavaFilter() })
    }

    fun addFilters(filters: Collection<KFilter<*>>) {
        javaBuilder.addFilters(filters.map { it.toJavaFilter() })
    }

    fun addDisabledFilters(vararg filters: KFilter<*>) {
        javaBuilder.addDisabledFilters(filters.map { it.toJavaFilter() })
    }

    fun addDisabledFilters(filters: Collection<KFilter<*>>) {
        javaBuilder.addDisabledFilters(filters.map { it.toJavaFilter() })
    }

    fun ignoreBuiltInFilters() {
        javaBuilder.ignoreBuiltInFilters()
    }

    fun addDraftInterceptor(interceptor: DraftInterceptor<*>) {
        javaBuilder.addDraftInterceptor(interceptor)
    }

    fun addDraftInterceptors(vararg interceptors: DraftInterceptor<*>) {
        javaBuilder.addDraftInterceptors(*interceptors)
    }

    fun addDraftInterceptors(interceptor: List<DraftInterceptor<*>>) {
        javaBuilder.addDraftInterceptors(interceptor)
    }

    fun addCustomers(vararg customers: KCustomizer) {
        javaBuilder.addCustomizers(customers.map { JavaCustomizer(it) })
    }

    fun addCustomers(customers: Collection<KCustomizer>) {
        javaBuilder.addCustomizers(customers.map { JavaCustomizer(it) })
    }

    fun addInitializers(vararg initializers: KInitializer) {
        javaBuilder.addInitializers(initializers.map { JavaInitializer(it) })
    }

    fun addInitializers(initializers: Collection<KInitializer>) {
        javaBuilder.addInitializers(initializers.map { JavaInitializer(it) })
    }

    fun setDatabaseValidationMode(mode: DatabaseValidationMode) {
        javaBuilder.setDatabaseValidationMode(mode)
    }

    fun setMicroServiceName(microServiceName: String) {
        javaBuilder.setMicroServiceName(microServiceName)
    }

    fun setMicroServiceExchange(exchange: MicroServiceExchange) {
        javaBuilder.setMicroServiceExchange(exchange)
    }

    @DslScope
    class ConnectionManagerDsl internal constructor(
        private val javaBlock: Function<Connection, *>
    ) {
        private var proceeded: Boolean = false

        private var result: Any? = null

        fun proceed(con: Connection) {
            if (proceeded) {
                throw IllegalStateException("ConnectionManagerDsl cannot be proceeded twice")
            }
            result = javaBlock.apply(con)
            proceeded = true
        }

        @Suppress("UNCHECKED_CAST")
        internal fun <R> get(): R {
            if (!proceeded) {
                throw IllegalStateException("ConnectionManagerDsl has not be proceeded")
            }
            return result as R
        }
    }

    private class ConnectionManagerImpl(
        private val dslBlock: ConnectionManagerDsl.() -> Unit
    ) : ConnectionManager {

        override fun <R> execute(block: Function<Connection, R>): R =
            ConnectionManagerDsl(block).let {
                it.dslBlock()
                it.get()
            }
    }

    @DslScope
    class ExecutorDsl internal constructor(
        val con: Connection,
        val sql: String,
        val variables: List<Any>,
        val purpose: ExecutionPurpose,
        val ctx: ExecutorContext?,
        private val statementFactory: StatementFactory?,
        private val javaBlock: SqlFunction<PreparedStatement, *>
    ) {
        private var proceeded: Boolean = false

        private var result: Any? = null

        fun proceed() {
            if (proceeded) {
                throw IllegalStateException("ExecutorDsl cannot be proceeded twice")
            }
            result = DefaultExecutor.INSTANCE.execute(con, sql, variables, purpose, ctx, statementFactory, javaBlock)
            proceeded = true
        }

        @Suppress("UNCHECKED_CAST")
        internal fun <R> get(): R {
            if (!proceeded) {
                throw IllegalStateException("ExecutorDsl has not be proceeded")
            }
            return result as R
        }
    }

    private class ExecutorImpl(
        private val dslBlock: ExecutorDsl.() -> Unit
    ) : Executor {
        override fun <R> execute(
            con: Connection,
            sql: String,
            variables: List<Any>,
            purpose: ExecutionPurpose,
            ctx: ExecutorContext?,
            statementFactory: StatementFactory?,
            block: SqlFunction<PreparedStatement, R>
        ): R =
            ExecutorDsl(
                con,
                sql,
                variables,
                purpose,
                ctx,
                statementFactory,
                block
            ).let {
                it.dslBlock()
                it.get()
            }
    }

    @DslScope
    class CacheDsl internal constructor(
        private val javaCfg: CacheConfig
    ) {
        fun setCacheFactory(cacheFactory: CacheFactory) {
            javaCfg.setCacheFactory(cacheFactory)
        }

        fun <T: Any> setObjectCache(entityType: KClass<T>, cache: Cache<*, T>?) {
            javaCfg.setObjectCache(entityType.java, cache)
        }

        fun setAssociatedIdCache(prop: KProperty1<*, *>, cache: Cache<*, *>?) {
            javaCfg.setAssociatedIdCache(prop.toImmutableProp(), cache)
        }

        fun setAssociatedListIdCache(prop: KProperty1<*, *>, cache: Cache<*, List<*>>?) {
            javaCfg.setAssociatedIdListCache(prop.toImmutableProp(), cache)
        }

        fun <R> setCalculatedCache(prop: KProperty1<*, R>, cache: Cache<*, R>) {
            javaCfg.setCalculatedCache(prop.toImmutableProp(), cache)
        }

        fun setAbandonedCallback(callback: CacheAbandonedCallback?) {
            javaCfg.setAbandonedCallback(callback);
        }
    }

    internal fun buildKSqlClient(): KSqlClient =
        KSqlClientImpl(javaBuilder.build())
}