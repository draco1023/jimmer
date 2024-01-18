package org.babyfish.jimmer.apt.immutable.generator;

import com.squareup.javapoet.*;
import org.babyfish.jimmer.CircularReferenceException;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableProp;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableType;
import org.babyfish.jimmer.meta.PropId;
import org.babyfish.jimmer.runtime.DraftContext;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.NonSharedList;
import org.jetbrains.annotations.Nullable;

import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.Modifier;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class DraftImplGenerator {

    private static final Enum<?>[] EMPTY_ENUM_ARR = new Enum[0];

    private final ImmutableType type;

    private final ClassName draftSpiClassName;

    private TypeSpec.Builder typeBuilder;

    public DraftImplGenerator(ImmutableType type) {
        this.type = type;
        draftSpiClassName = ClassName.get(DraftSpi.class);
    }

    public void generate(TypeSpec.Builder parentBuilder) {
        typeBuilder = TypeSpec.classBuilder("DraftImpl")
                .addModifiers(Modifier.PRIVATE, Modifier.STATIC)
                .addSuperinterface(type.getImplementorClassName())
                .addSuperinterface(draftSpiClassName)
                .addSuperinterface(type.getDraftClassName());
        addFields();
        addStaticFields();
        addConstructor();
        addReadonlyMethods();
        for (ImmutableProp prop : type.getProps().values()) {
            addGetter(prop);
            addCreator(prop);
            addSetter(prop);
            addUtilMethod(prop, false);
            addUtilMethod(prop, true);
        }
        addSet(PropId.class);
        addSet(String.class);
        addShow(PropId.class);
        addShow(String.class);
        addUnload(PropId.class);
        addUnload(String.class);
        addDraftContext();
        addResolve();
        addModified();
        parentBuilder.addType(typeBuilder.build());
    }

    private void addFields() {
        typeBuilder.addField(
                FieldSpec
                        .builder(
                                Constants.DRAFT_CONTEXT_CLASS_NAME,
                                Constants.DRAFT_FIELD_CTX,
                                Modifier.PRIVATE
                        )
                        .build()
        );
        typeBuilder.addField(
                FieldSpec
                        .builder(
                                type.getImplClassName(),
                                Constants.DRAFT_FIELD_BASE,
                                Modifier.PRIVATE
                        )
                        .build()
        );
        typeBuilder.addField(
                FieldSpec
                        .builder(
                                type.getImplClassName(),
                                Constants.DRAFT_FIELD_MODIFIED,
                                Modifier.PRIVATE
                        )
                        .build()
        );
        typeBuilder.addField(
                FieldSpec
                        .builder(
                                boolean.class,
                                Constants.DRAFT_FIELD_RESOLVING,
                                Modifier.PRIVATE
                        )
                        .build()
        );
    }

    private void addStaticFields() {
        boolean hasEmail = false;
        for (ImmutableProp prop : type.getProps().values()) {
            Map<String, List<AnnotationMirror>> mirrorMultiMap =
                    Annotations.validateAnnotationMirrorMultiMap(prop);
            List<AnnotationMirror> emails = mirrorMultiMap.get("Email");
            List<AnnotationMirror> patterns = mirrorMultiMap.get("Pattern");
            if (emails != null) {
                hasEmail = true;
            }
            if (patterns == null) {
                patterns = Collections.emptyList();
            }
            for (int i = 0; i < patterns.size(); i++) {
                int flags = 0;
                for (Enum<?> flag : Annotations.annotationValue(patterns.get(i), "flags", EMPTY_ENUM_ARR)) {
                    Method method;
                    try {
                        method = flag.getClass().getMethod("getValue");
                    } catch (NoSuchMethodException ex) {
                        throw new AssertionError("Internal bug", ex);
                    }
                    int flagValue;
                    try {
                        flagValue = (Integer)method.invoke(flag);
                    } catch (IllegalAccessException | InvocationTargetException ex) {
                        throw new AssertionError("Internal bug", ex);
                    }
                    flags |= flagValue;
                }
                FieldSpec.Builder builder = FieldSpec
                        .builder(
                                java.util.regex.Pattern.class,
                                Constants.regexpPatternFieldName(prop, i),
                                Modifier.PRIVATE,
                                Modifier.STATIC,
                                Modifier.FINAL
                        )
                        .initializer(
                                "$T.compile($S, $L)",
                                java.util.regex.Pattern.class,
                                Annotations.annotationValue(patterns.get(i), "regexp", ""),
                                flags
                        );
                typeBuilder.addField(builder.build());
            }
        }
        if (hasEmail) {
            FieldSpec.Builder builder = FieldSpec
                    .builder(
                            java.util.regex.Pattern.class,
                            Constants.DRAFT_FIELD_EMAIL_PATTERN,
                            Modifier.PRIVATE,
                            Modifier.STATIC,
                            Modifier.FINAL
                    )
                    .initializer(
                            "$T.compile($S)",
                            java.util.regex.Pattern.class,
                            "^[^@]+@[^@]+$"
                    );
            typeBuilder.addField(builder.build());
        }
        for (Map.Entry<ClassName, String> e : type.getValidationMessageMap().entrySet()) {
            FieldSpec.Builder builder = FieldSpec
                    .builder(
                            ParameterizedTypeName.get(
                                    Constants.VALIDATOR_CLASS_NAME,
                                    type.getClassName()
                            ),
                            Constants.validatorFieldName(e.getKey()),
                            Modifier.PRIVATE,
                            Modifier.STATIC,
                            Modifier.FINAL
                    )
                    .initializer(
                            "\n    new $T<>($T.class, $S, $T.class, null)",
                            Constants.VALIDATOR_CLASS_NAME,
                            e.getKey(),
                            e.getValue(),
                            type.getClassName()
                    );
            typeBuilder.addField(builder.build());
        }
        for (ImmutableProp prop : type.getProps().values()) {
            for (Map.Entry<ClassName, String> e : prop.getValidationMessageMap().entrySet()) {
                FieldSpec.Builder builder = FieldSpec
                        .builder(
                                ParameterizedTypeName.get(
                                        Constants.VALIDATOR_CLASS_NAME,
                                        prop.getTypeName()
                                ),
                                Constants.validatorFieldName(prop, e.getKey()),
                                Modifier.PRIVATE,
                                Modifier.STATIC,
                                Modifier.FINAL
                        )
                        .initializer(
                                "\n    new $T<>($T.class, $S, $T.class, $T.byIndex($L))",
                                Constants.VALIDATOR_CLASS_NAME,
                                e.getKey(),
                                e.getValue(),
                                type.getClassName(),
                                Constants.PROP_ID_CLASS_NAME,
                                prop.getSlotName()
                        );
                typeBuilder.addField(builder.build());
            }
        }
    }

    private void addConstructor() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addParameter(Constants.DRAFT_CONTEXT_CLASS_NAME, "ctx")
                .addParameter(type.getClassName(), "base")
                .addStatement("$L = ctx", Constants.DRAFT_FIELD_CTX)
                .beginControlFlow("if (base != null)")
                .addStatement("$L = ($T)base", Constants.DRAFT_FIELD_BASE, type.getImplClassName())
                .endControlFlow()
                .beginControlFlow("else")
                .addStatement("$L = new $T()", Constants.DRAFT_FIELD_MODIFIED, type.getImplClassName())
                .endControlFlow();
        typeBuilder.addMethod(builder.build());
    }

    private void addReadonlyMethods() {
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__isLoaded")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(PropId.class, "prop")
                        .returns(boolean.class)
                        .addStatement("return $L.__isLoaded(prop)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__isLoaded")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(String.class, "prop")
                        .returns(boolean.class)
                        .addStatement("return $L.__isLoaded(prop)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__isVisible")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(PropId.class, "prop")
                        .returns(boolean.class)
                        .addStatement("return $L.__isVisible(prop)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__isVisible")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(String.class, "prop")
                        .returns(boolean.class)
                        .addStatement("return $L.__isVisible(prop)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("hashCode")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .returns(int.class)
                        .addStatement("return $L.hashCode()", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__hashCode")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(boolean.class, "shallow")
                        .returns(int.class)
                        .addStatement("return $L.__hashCode(shallow)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("equals")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(Object.class, "obj")
                        .returns(boolean.class)
                        .addStatement("return $L.equals(obj)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("__equals")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .addParameter(Object.class, "obj")
                        .addParameter(boolean.class, "shallow")
                        .returns(boolean.class)
                        .addStatement("return $L.__equals(obj, shallow)", UNMODIFIED)
                        .build()
        );
        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("toString")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .returns(String.class)
                        .addStatement("return $T.toString($L)", ImmutableObjects.class, UNMODIFIED)
                        .build()
        );
    }

    private void addGetter(ImmutableProp prop) {
        if (prop.getManyToManyViewBaseProp() != null) {
            return;
        }

        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getGetterName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(prop.getDraftTypeName(false));
        if (prop.isBeanStyle()) {
            builder.addAnnotation(Constants.JSON_IGNORE_CLASS_NAME);
        }
        if (prop.isNullable()) {
            builder.addAnnotation(Nullable.class);
        }

        ImmutableProp baseProp = prop.getIdViewBaseProp();
        if (baseProp != null) {
            if (baseProp.isList()) {
                builder.addStatement(
                        "$T<$T> __ids = new $T($L().size())",
                        Constants.LIST_CLASS_NAME,
                        baseProp.getTargetType().getIdProp().getTypeName().box(),
                        ArrayList.class,
                        baseProp.getGetterName()
                );
                builder.beginControlFlow(
                        "for ($T __target : $L())",
                        baseProp.getElementTypeName(),
                        baseProp.getGetterName()
                );
                builder.addStatement(
                        "__ids.add(__target.$L())",
                        baseProp.getTargetType().getIdProp().getGetterName()
                );
                builder.endControlFlow();
                builder.addStatement("return __ids");
            } else {
                builder.addStatement("$T __target = $L()", baseProp.getElementTypeName(), baseProp.getGetterName());
                builder.addStatement(
                        prop.isNullable() ?
                                "return __target != null ? __target.$L() : null" :
                                "return __target.$L()",
                        baseProp.getTargetType().getIdProp().getGetterName()
                );
            }
        } else if (prop.isList()) {
            builder.addCode(
                    "return $L.$L($L.$L(), $T.class, $L);",
                    Constants.DRAFT_FIELD_CTX,
                    "toDraftList",
                    UNMODIFIED,
                    prop.getGetterName(),
                    prop.getElementTypeName(),
                    prop.isAssociation(false)
            );
        } else if (prop.isAssociation(false)) {
            builder.addCode(
                    "return $L.$L($L.$L());",
                    Constants.DRAFT_FIELD_CTX,
                    "toDraftObject",
                    UNMODIFIED,
                    prop.getGetterName()
            );
        } else {
            builder.addCode("return $L.$L();", UNMODIFIED, prop.getGetterName());
        }
        typeBuilder.addMethod(builder.build());
    }

    private void addCreator(ImmutableProp prop) {
        if (prop.getManyToManyViewBaseProp() != null) {
            return;
        }
        if (!prop.isAssociation(false) && !prop.isList()) {
            return;
        }
        ImmutableProp realProp = prop.getIdViewBaseProp();
        if (realProp == null) {
            realProp = prop;
        }
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getGetterName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .addParameter(boolean.class, "autoCreate")
                .returns(prop.getDraftTypeName(true));
        if (prop.isNullable()) {
            builder.beginControlFlow(
                    "if (autoCreate && (!__isLoaded($T.byIndex($L)) || $L() == null))",
                    Constants.PROP_ID_CLASS_NAME,
                    realProp.getSlotName(),
                    realProp.getGetterName()
            );
        } else {
            builder.beginControlFlow(
                    "if (autoCreate && (!__isLoaded($T.byIndex($L))))",
                    Constants.PROP_ID_CLASS_NAME,
                    realProp.getSlotName()
            );
        }
        if (prop.isList()) {
            builder.addStatement(
                    "$L(new $T<>())",
                    realProp.getSetterName(),
                    ArrayList.class
            );
        } else {
            builder.addStatement(
                    "$L($T.$L.produce(null, null))",
                    realProp.getSetterName(),
                    realProp.getDraftElementTypeName(),
                    "$"
            );
        }
        builder.endControlFlow();
        if (prop.isList()) {
            if (realProp != prop) {
                builder.addStatement(
                        "return new $T<>($T.TYPE, $L())",
                        Constants.MUTABLE_ID_VIEW_LIST_CLASS_NAME,
                        realProp.getTargetType().getProducerClassName(),
                        realProp.getGetterName()
                );
            } else {
                builder.addCode(
                        "return $L.$L($L.$L(), $T.class, $L);",
                        Constants.DRAFT_FIELD_CTX,
                        "toDraftList",
                        UNMODIFIED,
                        prop.getGetterName(),
                        prop.getElementType(),
                        prop.isAssociation(false)
                );
            }
        } else {
            builder.addCode(
                    "return $L.$L($L.$L());",
                    Constants.DRAFT_FIELD_CTX,
                    "toDraftObject",
                    UNMODIFIED,
                    prop.getGetterName()
            );
        }
        typeBuilder.addMethod(builder.build());
    }

    private void addSetter(ImmutableProp prop) {
        if (prop.isJavaFormula() || prop.getManyToManyViewBaseProp() != null) {
            return;
        }
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getSetterName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .addParameter(prop.getTypeName(), prop.getName())
                .returns(type.getDraftClassName());

        ImmutableProp baseProp = prop.getIdViewBaseProp();
        if (baseProp != null) {
            if (!prop.getReturnType().getKind().isPrimitive()) {
                builder.beginControlFlow("if ($L != null)", prop.getName());
            }
            if (prop.isList()) {
                builder.addStatement(
                        "$T<$T> __targets = new $T($L.size())",
                        Constants.LIST_CLASS_NAME,
                        baseProp.getElementTypeName(),
                        ArrayList.class,
                        prop.getName()
                );
                builder.beginControlFlow(
                        "for ($T __id : $L)",
                        baseProp.getTargetType().getIdProp().getTypeName(),
                        prop.getName()
                );
                builder.addStatement(
                        "__targets.add($T.makeIdOnly($T.class, __id))",
                        ImmutableObjects.class,
                        baseProp.getElementTypeName()
                );
                builder.endControlFlow();
                builder.addStatement("$L(__targets)", baseProp.getSetterName());
            } else {
                builder.addStatement(
                        "$L($T.makeIdOnly($T.class, $L))",
                        baseProp.getSetterName(),
                        ImmutableObjects.class,
                        baseProp.getElementTypeName(),
                        prop.getName()
                );
            }
            if (!prop.getReturnType().getKind().isPrimitive()) {
                builder.nextControlFlow("else");
                if (prop.isList()) {
                    builder.addStatement("$L($T.emptyList())", baseProp.getSetterName(), Constants.COLLECTIONS_CLASS_NAME);
                } else {
                    builder.addStatement("$L(null)", baseProp.getSetterName());
                }
                builder.endControlFlow();
            }
        } else {

            new ValidationGenerator(prop, prop.getName(), builder).generate();

            builder.addStatement("$T __tmpModified = $L()", type.getImplClassName(), Constants.DRAFT_FIELD_MODIFIED);
            if (prop.isList()) {
                builder.addStatement(
                        "__tmpModified.$L = $T.of(__tmpModified.$L, $L)",
                        prop.getValueName(),
                        NonSharedList.class,
                        prop.getValueName(),
                        prop.getName()
                );
            } else {
                builder.addStatement("__tmpModified.$L = $L", prop.getValueName(), prop.getName());
            }
            if (prop.isLoadedStateRequired()) {
                builder.addStatement("__tmpModified.$L = true", prop.getLoadedStateName());
            }
        }
        builder.addStatement("return this");
        typeBuilder.addMethod(builder.build());
    }

    private void addUtilMethod(ImmutableProp prop, boolean withBase) {
        if (!prop.isAssociation(false) || prop.getManyToManyViewBaseProp() != null) {
            return;
        }
        String methodName = prop.isList() ? prop.getAdderByName() : prop.getApplierName();
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(methodName)
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(type.getDraftClassName());
        if (withBase) {
            builder.addParameter(prop.getElementTypeName(), "base");
        }

        ParameterizedTypeName consumerTypeName = ParameterizedTypeName.get(
                Constants.DRAFT_CONSUMER_CLASS_NAME,
                prop.getDraftElementTypeName()
        );
        builder.addParameter(
                consumerTypeName,
                "block"
        );
        if (withBase) {
            if (prop.isList()) {
                builder.addStatement(
                        "$L(true).add(($T)$T.$L.produce(base, block))",
                        prop.getGetterName(),
                        prop.getDraftElementTypeName(),
                        prop.getDraftElementTypeName(),
                        "$"
                );
            } else {
                builder.addStatement(
                        "$L($T.$L.produce(base, block))",
                        prop.getSetterName(),
                        prop.getDraftElementTypeName(),
                        "$"
                );
            }
        } else {
            builder.addStatement("$L(null, $L)", methodName, "block");
        }
        builder.addStatement("return this");
        typeBuilder.addMethod(builder.build());
    }

    private void addSet(Class<?> argType) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("__set")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(
                        AnnotationSpec
                                .builder(SuppressWarnings.class)
                                .addMember("value", "$S", "unchecked")
                                .build()
                )
                .addAnnotation(Override.class)
                .addParameter(argType, "prop")
                .addParameter(Object.class, "value");
        CaseAppender appender = new CaseAppender(builder, type, argType);
        if (argType == PropId.class) {
            builder.addStatement("int __propIndex = prop.asIndex()");
            builder.beginControlFlow("switch (__propIndex)");
            appender.addIllegalCase();
            builder.addStatement("__set(prop.asName(), value)");
            builder.addStatement("return");
        } else {
            builder.beginControlFlow("switch (prop)");
        }
        for (ImmutableProp prop : type.getPropsOrderById()) {
            Object castTo = prop.getBoxType();
            if (castTo == null) {
                castTo = prop.getTypeName();
            }
            appender.addCase(prop);
            if (prop.isJavaFormula() || prop.getManyToManyViewBaseProp() != null) {
                builder.addStatement("break");
            } else if (prop.getTypeName().isPrimitive()) {
                builder.addStatement(
                        "if (value == null) throw new $T($S);\n" +
                                "$L(($T)value);\n" +
                                "break",
                        IllegalArgumentException.class,
                        "'" + prop.getName() + "' cannot be null, if you want to set null, " +
                                "please use any annotation whose simple name is \"Nullable\" to decorate the property",
                        prop.getSetterName(),
                        castTo
                );
            } else {
                builder.addStatement(
                        "$L(($T)value);break",
                        prop.getSetterName(),
                        castTo
                );
            }
        }
        builder.addStatement(
                "default: throw new IllegalArgumentException($S + prop + $S)",
                "Illegal property " +
                        (argType == String.class ? "name" : "id") +
                        " for \"" + type + "\": \"",
                "\""
        );
        builder.endControlFlow();
        typeBuilder.addMethod(builder.build());
    }

    private void addShow(Class<?> argType) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("__show")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .addParameter(argType, "prop")
                .addParameter(TypeName.BOOLEAN, "visible");
        builder.addStatement("$T __visibility = $L.__visibility", Constants.VISIBILITY_CLASS_NAME, UNMODIFIED);
        builder.beginControlFlow("if (__visibility == null)", UNMODIFIED);
        builder.beginControlFlow("if (visible)");
        builder.addStatement("return");
        builder.endControlFlow();
        builder.addStatement(
                "$L().__visibility = __visibility = $T.of($L)",
                Constants.DRAFT_FIELD_MODIFIED,
                Constants.VISIBILITY_CLASS_NAME,
                type.getProps().size()
        );
        builder.endControlFlow();
        CaseAppender appender = new CaseAppender(builder, type, argType);
        if (argType == PropId.class) {
            builder.addStatement("int __propIndex = prop.asIndex()");
            builder.beginControlFlow("switch (__propIndex)");
            appender.addIllegalCase();
            builder.addStatement("__show(prop.asName(), visible)");
            builder.addStatement("return");
        } else {
            builder.beginControlFlow("switch (prop)");
        }
        for (ImmutableProp prop : type.getPropsOrderById()) {
            appender.addCase(prop);
            builder.addStatement(
                    "__visibility.show($L, visible);break",
                    prop.getSlotName()
            );
        }
        builder.addStatement(
                "default: throw new IllegalArgumentException(\n$>$S + \nprop + \n$S\n$<)",
                "Illegal property " +
                        (argType == String.class ? "name" : "id") +
                        " for \"" + type + "\": \"",
                "\",it does not exists"
        );
        builder.endControlFlow();
        typeBuilder.addMethod(builder.build());
    }

    private void addUnload(Class<?> argType) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("__unload")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .addParameter(argType, "prop");
        CaseAppender appender = new CaseAppender(builder, type, argType);
        if (argType == PropId.class) {
            builder.addStatement("int __propIndex = prop.asIndex()");
            builder.beginControlFlow("switch (__propIndex)");
            appender.addIllegalCase();
            builder.addStatement("__unload(prop.asName())");
            builder.addStatement("return");
        } else {
            builder.beginControlFlow("switch (prop)");
        }
        for (ImmutableProp prop : type.getPropsOrderById()) {
            appender.addCase(prop);
            if (prop.getBaseProp() != null) {
                builder.addStatement(
                        "__unload($T.byIndex($L));break",
                        Constants.PROP_ID_CLASS_NAME,
                        prop.getBaseProp().getSlotName()
                );
            } else if (prop.isJavaFormula()) {
                builder.addStatement("break");
            } else if (prop.isLoadedStateRequired()) {
                builder.addStatement(
                        "$L().$L = false;break",
                        Constants.DRAFT_FIELD_MODIFIED,
                        prop.getLoadedStateName()
                );
            } else {
                builder.addStatement(
                        "$L().$L = null;break",
                        Constants.DRAFT_FIELD_MODIFIED,
                        prop.getValueName()
                );
            }
        }
        builder.addStatement(
                "default: throw new IllegalArgumentException($S + prop + $S)",
                "Illegal property " +
                        (argType == String.class ? "name" : "id") +
                        " for \"" + type + "\": \"",
                "\", it does not exist or its loaded state is not controllable"
        );
        builder.endControlFlow();
        typeBuilder.addMethod(builder.build());
    }

    private void addDraftContext() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("__draftContext")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(DraftContext.class)
                .addStatement("return $L", Constants.DRAFT_FIELD_CTX);
        typeBuilder.addMethod(builder.build());
    }

    private void addResolve() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("__resolve")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(Object.class);

        builder
                .beginControlFlow("if ($L)", Constants.DRAFT_FIELD_RESOLVING)
                .addStatement("throw new $T()", CircularReferenceException.class)
                .endControlFlow();

        builder
                .addStatement("$L = true", Constants.DRAFT_FIELD_RESOLVING)
                .beginControlFlow("try");
        addResolveCode(builder);
        builder
                .endControlFlow()
                .beginControlFlow("finally")
                .addStatement("$L = false", Constants.DRAFT_FIELD_RESOLVING)
                .endControlFlow();
        typeBuilder.addMethod(builder.build());
    }

    private void addResolveCode(MethodSpec.Builder builder) {
        builder
                .addStatement("Implementor base = $L", Constants.DRAFT_FIELD_BASE)
                .addStatement("Impl __tmpModified = $L", Constants.DRAFT_FIELD_MODIFIED);

        if (type.getProps().values().stream().anyMatch(it -> it.isAssociation(false) || it.isList())) {
            builder.beginControlFlow("if (__tmpModified == null)");
            for (ImmutableProp prop : type.getProps().values()) {
                if (prop.isValueRequired() && (prop.isAssociation(false) || prop.isList())) {
                    builder.beginControlFlow(
                            "if (base.__isLoaded($T.byIndex($L)))",
                            Constants.PROP_ID_CLASS_NAME,
                            prop.getSlotName()
                    );
                    builder.addStatement(
                            "$T oldValue = base.$L()",
                            prop.getTypeName(),
                            prop.getGetterName()
                    );
                    builder.addStatement(
                            "$T newValue = $L.$L(oldValue)",
                            prop.getTypeName(),
                            Constants.DRAFT_FIELD_CTX,
                            prop.isList() ? "resolveList" : "resolveObject"
                    );
                    builder.beginControlFlow("if (oldValue != newValue)");
                    builder.addStatement("$L(newValue)", prop.getSetterName());
                    builder.endControlFlow();
                    builder.endControlFlow();
                }
            }
            builder.addStatement("__tmpModified = $L", Constants.DRAFT_FIELD_MODIFIED);
            builder.endControlFlow();

            builder.beginControlFlow("else");
            for (ImmutableProp prop : type.getProps().values()) {
                if (prop.isValueRequired()) {
                    if (prop.isList()) {
                        builder.addStatement(
                                "__tmpModified.$L = $T.of(__tmpModified.$L, $L.$L(__tmpModified.$L))",
                                prop.getValueName(),
                                NonSharedList.class,
                                prop.getValueName(),
                                Constants.DRAFT_FIELD_CTX,
                                "resolveList",
                                prop.getValueName()
                        );
                    } else if (prop.isAssociation(false)) {
                        builder.addStatement(
                                "__tmpModified.$L = $L.$L(__tmpModified.$L)",
                                prop.getValueName(),
                                Constants.DRAFT_FIELD_CTX,
                                "resolveObject",
                                prop.getValueName()
                        );
                    }
                }
            }
            builder.endControlFlow();
        }

        builder
                .beginControlFlow(
                        "if ($L != null && __tmpModified == null)",
                        Constants.DRAFT_FIELD_BASE
                )
                .addStatement("return base")
                .endControlFlow();
        for (Map.Entry<ClassName, String> e : type.getValidationMessageMap().entrySet()) {
            builder.addStatement("$L.validate(__tmpModified)", Constants.validatorFieldName(e.getKey()));
        }
        builder.addStatement("return __tmpModified");
    }

    private void addModified() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(Constants.DRAFT_FIELD_MODIFIED)
                .addModifiers(Modifier.PRIVATE)
                .returns(type.getImplClassName())
                .addStatement("$T __tmpModified = $L", type.getImplClassName(), Constants.DRAFT_FIELD_MODIFIED)
                .beginControlFlow("if (__tmpModified == null)")
                .addStatement("__tmpModified = $L.clone()", Constants.DRAFT_FIELD_BASE)
                .addStatement("$L = __tmpModified", Constants.DRAFT_FIELD_MODIFIED)
                .endControlFlow()
                .addStatement("return __tmpModified");
        typeBuilder.addMethod(builder.build());
    }

    private static final String UNMODIFIED =
            "(" +
                    Constants.DRAFT_FIELD_MODIFIED +
                    "!= null ? " +
                    Constants.DRAFT_FIELD_MODIFIED +
                    " : " +
                    Constants.DRAFT_FIELD_BASE +
                    ")";
}