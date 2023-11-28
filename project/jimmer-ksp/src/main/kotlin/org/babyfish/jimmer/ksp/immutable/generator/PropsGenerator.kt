package org.babyfish.jimmer.ksp.immutable.generator

import com.google.devtools.ksp.processing.CodeGenerator
import com.google.devtools.ksp.processing.Dependencies
import com.google.devtools.ksp.symbol.KSClassDeclaration
import com.google.devtools.ksp.symbol.KSFile
import com.squareup.kotlinpoet.*
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import org.babyfish.jimmer.impl.util.StringUtil
import org.babyfish.jimmer.ksp.annotation
import org.babyfish.jimmer.ksp.className
import org.babyfish.jimmer.ksp.Context
import org.babyfish.jimmer.ksp.immutable.meta.ImmutableProp
import org.babyfish.jimmer.ksp.immutable.meta.ImmutableType
import org.babyfish.jimmer.sql.Embeddable
import java.io.OutputStreamWriter

class PropsGenerator(
    private val codeGenerator: CodeGenerator,
    private val ctx: Context,
    private val file: KSFile,
    private val modelClassDeclaration: KSClassDeclaration
) {
    fun generate(allFiles: List<KSFile>) {
        val outputFileName =
            file.fileName.let {
                var lastDotIndex = it.lastIndexOf('.')
                if (lastDotIndex == -1) {
                    "${it}$PROPS"
                } else {
                    "${it.substring(0, lastDotIndex)}$PROPS"
                }
            }
        codeGenerator.createNewFile(
            Dependencies(false, *allFiles.toTypedArray()),
            file.packageName.asString(),
            outputFileName
        ).use {
            val fileSpec = FileSpec
                .builder(
                    file.packageName.asString(),
                    outputFileName
                ).apply {
                    indent("    ")
                    addAnnotation(
                        AnnotationSpec
                            .builder(Suppress::class)
                            .apply {
                                addMember("\"RedundantVisibilityModifier\"")
                                addMember("\"Unused\"")
                            }
                            .build()
                    )
                    val type = ctx.typeOf(modelClassDeclaration)
                    addAnnotation(
                        AnnotationSpec
                            .builder(GENERATED_BY_CLASS_NAME)
                            .addMember("type = %L::class", type.simpleName)
                            .build()
                    )
                    if (modelClassDeclaration.annotation(Embeddable::class) != null) {
                        for (prop in type.properties.values) {
                            addEmbeddableProp(prop, false)
                            addEmbeddableProp(prop, true)
                        }
                    } else {
                        for (prop in type.properties.values) {
                            addProp(type, prop, nonNullTable = true, outerJoin = false, isTableEx = false)
                            addProp(type, prop, nonNullTable = false, outerJoin = false, isTableEx = false)
                            addProp(type, prop, nonNullTable = true, outerJoin = true, isTableEx = false)
                            addProp(type, prop, nonNullTable = false, outerJoin = true, isTableEx = false)
                            addProp(type, prop, nonNullTable = true, outerJoin = false, isTableEx = true)
                            addProp(type, prop, nonNullTable = false, outerJoin = false, isTableEx = true)
                            addProp(type, prop, nonNullTable = true, outerJoin = true, isTableEx = true)
                            addProp(type, prop, nonNullTable = false, outerJoin = true, isTableEx = true)
                            addIdProp(type, prop, type.getIdPropName(prop.name), nonNullTable = true, isTableEx = false)
                            addIdProp(type, prop, type.getIdPropName(prop.name), nonNullTable = false, isTableEx = false)
                            addIdProp(type, prop, type.getIdPropName(prop.name), nonNullTable = true, isTableEx = true)
                            addIdProp(type, prop, type.getIdPropName(prop.name), nonNullTable = false, isTableEx = true)
                        }
                    }
                    if (type.isEntity) {
                        addRemoteId(type, false)
                        addRemoteId(type, true)
                        addFetchByFun(type, false)
                        addFetchByFun(type, true)
                    }
                    addObjectMeta(type)
                }.build()
            val writer = OutputStreamWriter(it, Charsets.UTF_8)
            fileSpec.writeTo(writer)
            writer.flush()
        }
    }

    private fun FileSpec.Builder.addProp(
        type: ImmutableType,
        prop: ImmutableProp,
        nonNullTable: Boolean,
        outerJoin: Boolean,
        isTableEx: Boolean
    ) {
        if (!prop.isDsl(isTableEx)) {
            return
        }
        if (outerJoin && !prop.isAssociation(true)) {
            return
        }
        if (nonNullTable && (prop.isAssociation(true) || prop.isNullable)) {
            return
        }
        if (isTableEx && !prop.isAssociation(true)) {
            return
        }
        val receiverClassName = when {
            isTableEx -> K_TABLE_EX_CLASS_NAME
            prop.isAssociation(true) || prop.isNullable -> K_PROPS_CLASS_NAME
            nonNullTable -> K_NON_NULL_PROPS_CLASS_NAME
            else -> K_NULLABLE_PROPS_CLASS_NAME
        }.parameterizedBy(
            type.className
        )

        val propName = if (outerJoin) "${prop.name}?" else prop.name
        val innerFunName = when {
            outerJoin -> "outerJoin"
            prop.isAssociation(true) -> "join"
            else -> "get"
        }
        val returnClassName =
            when {
                prop.isRemote ->
                    if (outerJoin) {
                        K_NULLABLE_REMOTE_REF
                    } else {
                        K_NON_NULL_REMOTE_REF
                    }
                prop.isAssociation(true) && isTableEx ->
                    if (outerJoin) {
                        K_NULLABLE_TABLE_CLASS_NAME_EX
                    } else {
                        K_NON_NULL_TABLE_CLASS_NAME_EX
                    }
                prop.isAssociation(true) && !isTableEx ->
                    if (outerJoin) {
                        K_NULLABLE_TABLE_CLASS_NAME
                    } else {
                        K_NON_NULL_TABLE_CLASS_NAME
                    }
                else ->
                    if (nonNullTable) {
                        K_NON_NULL_PROP_EXPRESSION
                    } else {
                        K_NULLABLE_PROP_EXPRESSION
                    }
            }.parameterizedBy(
                prop.targetTypeName(overrideNullable = false).let {
                    if (prop.isList && !prop.isAssociation(true)) {
                        LIST.parameterizedBy(it)
                    } else {
                        it
                    }
                }
            )

        addProperty(
            PropertySpec
                .builder(propName, returnClassName)
                .receiver(receiverClassName)
                .getter(
                    FunSpec
                        .getterBuilder()
                        .apply {
                            if (prop.isRemote) {
                                addCode(
                                    "return %L.protect(%L(%T.%L.unwrap()))",
                                    K_REMOTE_REF,
                                    innerFunName,
                                    type.propsClassName,
                                    StringUtil.snake(prop.name, StringUtil.SnakeCase.UPPER)
                                )
                            } else if (innerFunName == "get") {
                                addCode(
                                    "return get<%T>(%T.%L.unwrap()) as %T",
                                    prop.targetTypeName(overrideNullable = false),
                                    type.propsClassName,
                                    StringUtil.snake(prop.name, StringUtil.SnakeCase.UPPER),
                                    returnClassName
                                )
                            } else {
                                addCode(
                                    "return %L(%T.%L.unwrap())",
                                    innerFunName,
                                    type.propsClassName,
                                    StringUtil.snake(prop.name, StringUtil.SnakeCase.UPPER)
                                )
                            }
                        }
                        .build()
                )
                .build()
        )
    }

    private fun FileSpec.Builder.addIdProp(
        type: ImmutableType,
        prop: ImmutableProp,
        idPropName: String?,
        nonNullTable: Boolean,
        isTableEx: Boolean
    ) {
        idPropName ?: return
        if (nonNullTable && prop.isNullable) {
            return
        }
        if (prop.isTransient || !prop.isAssociation(true) || prop.isList != isTableEx) {
            return
        }
        val receiverClassName = when {
            prop.isNullable -> K_PROPS_CLASS_NAME
            isTableEx && nonNullTable -> K_NON_NULL_TABLE_CLASS_NAME_EX
            isTableEx && !nonNullTable -> K_NULLABLE_TABLE_CLASS_NAME_EX
            !isTableEx && nonNullTable -> K_NON_NULL_TABLE_CLASS_NAME
            else -> K_NULLABLE_PROPS_CLASS_NAME
        }.parameterizedBy(
            type.className
        )
        val returnClassName = if (nonNullTable) {
            K_NON_NULL_PROP_EXPRESSION
        } else {
            K_NULLABLE_PROP_EXPRESSION
        }.parameterizedBy(
            prop.targetType!!.idProp!!.typeName()
        )
        addProperty(
            PropertySpec
                .builder(idPropName, returnClassName)
                .receiver(receiverClassName)
                .getter(
                    FunSpec
                        .getterBuilder()
                        .addStatement(
                            "return getAssociatedId<%T>(%T.%L.unwrap()) as %T",
                            prop.targetType!!.idProp!!.targetTypeName(overrideNullable = false),
                            type.propsClassName,
                            StringUtil.snake(prop.name, StringUtil.SnakeCase.UPPER),
                            returnClassName
                        )
                        .build()
                )
                .build()
        )
    }

    private fun FileSpec.Builder.addEmbeddableProp(prop: ImmutableProp, nullable: Boolean) {
        val receiverTypeName = if (nullable) {
            K_NULLABLE_PROP_EXPRESSION.parameterizedBy(
                modelClassDeclaration.className()
            )
        } else {
            K_NON_NULL_PROP_EXPRESSION.parameterizedBy(
                modelClassDeclaration.className()
            )
        }
        val implementorTypeName = if (nullable) {
            K_NULLABLE_PROP_EXPRESSION_IMPLEMENTOR.parameterizedBy(
                modelClassDeclaration.className()
            )
        } else {
            K_NON_NULL_PROP_EXPRESSION_IMPLEMENTOR.parameterizedBy(
                modelClassDeclaration.className()
            )
        }
        val returnTypeName = if (nullable) {
            K_NULLABLE_PROP_EXPRESSION.parameterizedBy(
                prop.typeName()
            )
        } else {
            K_NON_NULL_PROP_EXPRESSION.parameterizedBy(
                prop.typeName()
            )
        }
        addProperty(
            PropertySpec
                .builder(prop.name, returnTypeName)
                .receiver(receiverTypeName)
                .getter(
                    FunSpec
                        .getterBuilder()
                        .addStatement(
                            "return (this as %T).get(%T::%L)",
                            implementorTypeName,
                            modelClassDeclaration.className(),
                            prop.name
                        )
                        .build()
                )
                .build()
        )
    }

    private fun FileSpec.Builder.addRemoteId(type: ImmutableType, nullable: Boolean) {
        val returnTypeName =
            if (nullable) {
                K_NULLABLE_PROP_EXPRESSION
            } else {
                K_NON_NULL_PROP_EXPRESSION
            }.parameterizedBy(
                type.idProp!!.typeName()
            )
        addProperty(
            PropertySpec
                .builder(type.idProp!!.name, returnTypeName)
                .receiver(
                    if (nullable) {
                        K_NULLABLE_REMOTE_REF
                    } else {
                        K_NON_NULL_REMOTE_REF
                    }.parameterizedBy(
                        type.className
                    )
                )
                .getter(
                    FunSpec
                        .getterBuilder()
                        .addCode(
                            "return (this as %T<*>).id<%T>() as %T",
                            K_REMOTE_REF_IMPLEMENTOR,
                            type.idProp!!.targetTypeName(),
                            returnTypeName
                        )
                        .build()
                )
                .build()
        )
    }

    private fun FileSpec.Builder.addFetchByFun(type: ImmutableType, nullable: Boolean) {
        addFunction(
            FunSpec
                .builder("fetchBy")
                .receiver(
                    if (nullable) {
                        K_NULLABLE_TABLE_CLASS_NAME
                    } else {
                        K_NON_NULL_TABLE_CLASS_NAME
                    }
                    .parameterizedBy(type.className)
                )
                .addParameter(
                    "block",
                    LambdaTypeName.get(
                        type.fetcherDslClassName,
                        emptyList(),
                        UNIT
                    )
                )
                .returns(
                    SELECTION_CLASS_NAME.parameterizedBy(
                        type.className.copy(nullable = nullable)
                    )
                )
                .addCode(
                    "return fetch(%T(%T::class).%M(block))",
                    NEW_FETCHER_FUN_CLASS_NAME,
                    type.className,
                    MemberName(type.className.packageName, "by")
                )
                .build()
        )
    }

    private fun FileSpec.Builder.addObjectMeta(type: ImmutableType) {
        addType(
            TypeSpec
                .objectBuilder(type.propsClassName)
                .apply {
                    for (prop in type.properties.values) {
                        addPropMeta(type, prop)
                    }
                }
                .build()
        )
    }

    private fun TypeSpec.Builder.addPropMeta(type: ImmutableType, prop: ImmutableProp) {
        addProperty(
            PropertySpec
                .builder(
                    StringUtil.snake(prop.name, StringUtil.SnakeCase.UPPER),
                    when {
                        prop.isReferenceList -> TYPED_PROP_REFERENCE_LIST_CLASS_NAME
                        prop.isReference -> TYPED_PROP_REFERENCE_CLASS_NAME
                        prop.isScalarList -> TYPED_PROP_SCALAR_LIST_CLASS_NAME
                        else -> TYPED_PROP_SCALAR_CLASS_NAME
                    }.parameterizedBy(
                        type.className,
                        prop.targetTypeName()
                    )
                )
                .initializer(
                    "%T.%L(%T::%N.%M())",
                    TYPED_PROP_CLASS_NAME,
                    when {
                        prop.isReferenceList -> "referenceList"
                        prop.isReference -> "reference"
                        prop.isScalarList -> "scalarList"
                        else -> "scalar"
                    },
                    type.className,
                    prop.name,
                    MemberName("org.babyfish.jimmer.kt", "toImmutableProp")
                )
                .build()
        )
    }
}