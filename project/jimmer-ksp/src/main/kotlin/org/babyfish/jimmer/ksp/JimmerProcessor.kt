package org.babyfish.jimmer.ksp

import com.google.devtools.ksp.processing.Resolver
import com.google.devtools.ksp.processing.SymbolProcessor
import com.google.devtools.ksp.processing.SymbolProcessorEnvironment
import com.google.devtools.ksp.symbol.*
import org.babyfish.jimmer.client.EnableImplicitApi
import org.babyfish.jimmer.dto.compiler.DtoAstException
import org.babyfish.jimmer.dto.compiler.DtoUtils
import org.babyfish.jimmer.ksp.client.ClientProcessor
import org.babyfish.jimmer.ksp.dto.DtoProcessor
import org.babyfish.jimmer.ksp.error.ErrorProcessor
import org.babyfish.jimmer.ksp.immutable.ImmutableProcessor

class JimmerProcessor(
    private val environment: SymbolProcessorEnvironment
) : SymbolProcessor {

    private val dtoDirs: Collection<String> =
        dtoDir("jimmer.dto.dirs", "src/main/") ?: listOf("src/main/dto")

    private val dtoTestDirs: Collection<String> =
        dtoDir("jimmer.dto.testDirs", "src/test/") ?: listOf("src/test/dto")

    private val dtoMutable: Boolean =
        environment.options["jimmer.dto.mutable"]?.trim() == "true"

    private val checkedException: Boolean =
        environment.options["jimmer.client.checkedException"]?.trim() == "true"

    private var serverGenerated = false

    private var explicitClientApi: Boolean? = null

    private var clientGenerated = false

    private var delayedClientTypeNames: Collection<String>? = null

    override fun process(resolver: Resolver): List<KSAnnotated> {
        return try {
            val ctx = Context(resolver, environment)
            if (explicitClientApi === null) {
                explicitClientApi = resolver.getAllFiles().any { file ->
                    file.declarations.any {
                        it is KSClassDeclaration &&
                            ctx.include(it) &&
                            it.annotation(EnableImplicitApi::class) !== null
                    }
                }
            }
            val processedDeclarations = mutableListOf<KSClassDeclaration>()
            if (!serverGenerated) {
                processedDeclarations += ImmutableProcessor(ctx).process()
                val errorGenerated = ErrorProcessor(ctx, checkedException).process()
                val dtoGenerated = DtoProcessor(
                    ctx,
                    if (resolver.getAllFiles().toList().isNotEmpty() && isTest(ctx.resolver.getAllFiles().first().filePath)) {
                        dtoTestDirs
                    } else {
                        dtoDirs
                    },
                    dtoMutable
                ).process()
                serverGenerated = true
                if (processedDeclarations.isNotEmpty() || errorGenerated || dtoGenerated) {
                    delayedClientTypeNames = resolver.getAllFiles().flatMap {  file ->
                        file.declarations.filterIsInstance<KSClassDeclaration>().map { it.fullName }
                    }.toList()
                    return processedDeclarations
                }
            }
            if (!clientGenerated) {
                clientGenerated = true
                ClientProcessor(
                    ctx,
                    explicitClientApi ?: error("Internal bug: explicitClientApi not resolved"),
                    delayedClientTypeNames
                ).process()
                delayedClientTypeNames = null
            }
            return processedDeclarations
        } catch (ex: MetaException) {
            environment.logger.error(ex.message!!, ex.declaration)
            emptyList()
        } catch (ex: DtoAstException) {
            environment.logger.error(ex.message!!)
            emptyList()
        }
    }

    private fun dtoDir(configurationName: String, prefix: String) : Collection<String>? =
        environment.options[configurationName]
            ?.trim()
            ?.takeIf { it.isNotEmpty() }
            ?.let { text ->
                text.split("\\s*[,:;]\\s*")
                    .map {
                        when {
                            it == "" || it == "/" -> null
                            it.startsWith("/") -> it.substring(1)
                            it.endsWith("/") -> it.substring(0, it.length - 1)
                            else -> it.takeIf { it.isNotEmpty() }
                        }?.also { dir ->
                            if (!dir.startsWith(prefix)) {
                                throw GeneratorException(
                                    "Illegal KSP configuration \"" +
                                        configurationName +
                                        "\", it contains an illegal path \"" +
                                        dir +
                                        "\" which does not start with \"" +
                                        prefix +
                                        "\""
                                )
                            }
                        }
                    }
                    .filterNotNull()
                    .toSet()
            }
            ?.let { DtoUtils.standardDtoDirs(it) }

    companion object {

        private fun isTest(path: String): Boolean {
            val testIndex = path.indexOf("/src/test/")
            if (testIndex == -1) {
                return false
            }
            val mainIndex = path.indexOf("/src/main/")
            return mainIndex == -1 || testIndex < mainIndex
        }
    }
}