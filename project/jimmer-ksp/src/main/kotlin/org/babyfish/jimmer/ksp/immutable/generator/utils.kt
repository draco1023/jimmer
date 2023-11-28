package org.babyfish.jimmer.ksp.immutable.generator

import com.google.devtools.ksp.symbol.KSAnnotated
import com.google.devtools.ksp.symbol.KSClassDeclaration
import com.google.devtools.ksp.symbol.KSPropertyDeclaration
import com.google.devtools.ksp.symbol.KSType
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.CodeBlock
import org.babyfish.jimmer.ksp.annotations
import org.babyfish.jimmer.ksp.fullName
import org.babyfish.jimmer.ksp.immutable.meta.ImmutableProp
import org.babyfish.jimmer.ksp.immutable.meta.ImmutableType
import org.babyfish.jimmer.ksp.MetaException
import javax.validation.Constraint
import kotlin.math.abs
import kotlin.reflect.KClass

internal fun CodeBlock.Builder.addElseForNonExistingProp(type: ImmutableType, argType: KClass<*>) {
    add("else -> throw IllegalArgumentException(\n")
    indent()
    add("%S + \n", "Illegal property ${if (argType == Int::class) "id " else "name"}")
    add("%S + \n", " for \"$type\": ")
    add("prop\n")
    unindent()
    addStatement(")\n")
}

internal fun regexpPatternFieldName(prop: ImmutableProp, index: Int): String =
    "__" + upper(prop.name) + "_PATTERN" + if (index == 0) "" else "_$index"

internal fun validatorFieldName(annotationType: ClassName): String =
    "__" + "_VALIDATOR_" + "_" + upper(annotationType.simpleName) + "_" + abs(annotationType.hashCode())

internal fun validatorFieldName(prop: ImmutableProp, annotationType: ClassName): String =
    "__" + upper(prop.name) + "_VALIDATOR_" + "_" + upper(annotationType.simpleName) + "_" + abs(annotationType.hashCode())

internal fun upper(text: String): String? {
    var prevUpper = true
    val builder = StringBuilder()
    val size = text.length
    for (i in 0 until size) {
        val c = text[i]
        val upper = Character.isUpperCase(c)
        if (upper) {
            if (!prevUpper) {
                builder.append('_')
            }
            builder.append(c)
        } else {
            builder.append(c.uppercaseChar())
        }
        prevUpper = upper
    }
    return builder.toString()
}

@Suppress("UNCHECKED_CAST")
fun parseValidationMessages(source: KSAnnotated): Map<ClassName, String> =
    source.annotations { true }.let { annotations ->
        val map = mutableMapOf<ClassName, String>()
        for (annotation in annotations) {
            val annotationDeclaration = annotation.annotationType.resolve().declaration
            val validatedBy = annotationDeclaration
                .annotations
                .firstOrNull {
                    it.fullName == Constraint::class.qualifiedName
                }
                ?.arguments
                ?.firstOrNull { it.name?.asString() == "validatedBy" }
                ?.let { it.value as List<Any> }
                ?.takeIf { it.isNotEmpty() }
                ?.map { (it as KSType).declaration.fullName }
            if (validatedBy != null) {
                val message = annotation
                    .arguments
                    .firstOrNull { it.name?.asString() == "message" }
                    ?.let {
                        it.value as? String
                    } ?: ""
                val className =
                    ClassName(
                        annotationDeclaration.packageName.asString(),
                        annotationDeclaration.simpleName.asString()
                    )
                if (map.containsKey(className)) {
                    throw MetaException(
                        when (source) {
                            is KSClassDeclaration -> source
                            is KSPropertyDeclaration -> source
                            else -> throw AssertionError("Internal bug: neither type nor property")
                        },
                        "duplicated annotation $className"
                    )
                }
                map[className] = message
            }
        }
        map
    }