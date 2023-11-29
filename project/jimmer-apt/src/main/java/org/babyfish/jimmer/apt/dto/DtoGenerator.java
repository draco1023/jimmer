package org.babyfish.jimmer.apt.dto;

import com.squareup.javapoet.*;
import org.babyfish.jimmer.apt.GeneratorException;
import org.babyfish.jimmer.apt.immutable.generator.Annotations;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableProp;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableType;
import org.babyfish.jimmer.apt.util.ConverterMetadata;
import org.babyfish.jimmer.dto.compiler.*;
import org.babyfish.jimmer.impl.util.StringUtil;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.Id;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.annotation.processing.Filer;
import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeElement;
import java.io.IOException;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
import java.util.*;

public class DtoGenerator {

    private static final String[] EMPTY_STR_ARR = new String[0];

    private final DtoType<ImmutableType, ImmutableProp> dtoType;

    private final Filer filer;

    private final DtoGenerator parent;

    private final DtoGenerator root;

    private final int depth;

    private final String innerClassName;

    private TypeSpec.Builder typeBuilder;

    public DtoGenerator(
            DtoType<ImmutableType, ImmutableProp> dtoType,
            Filer filer
    ) {
        this(dtoType, filer, null, null);
    }

    private DtoGenerator(
            DtoType<ImmutableType, ImmutableProp> dtoType,
            Filer filer,
            DtoGenerator parent,
            String innerClassName
    ) {
        if ((filer == null) == (parent == null)) {
            throw new IllegalArgumentException("The nullity values of `filer` and `parent` cannot be same");
        }
        if ((parent == null) != (innerClassName == null)) {
            throw new IllegalArgumentException("The nullity values of `parent` and `innerClassName` must be same");
        }
        this.dtoType = dtoType;
        this.filer = filer;
        this.parent = parent;
        this.root = parent != null ? parent.root : this;
        this.depth = parent == null ? 0 : parent.depth + 1;
        this.innerClassName = innerClassName;
    }

    public void generate() {
        String simpleName = getSimpleName();
        typeBuilder = TypeSpec
                .classBuilder(simpleName)
                .addModifiers(Modifier.PUBLIC)
                .addSuperinterface(
                        dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION) ?
                                ParameterizedTypeName.get(
                                        org.babyfish.jimmer.apt.immutable.generator.Constants.JSPECIFICATION_CLASS_NAME,
                                        dtoType.getBaseType().getClassName(),
                                        dtoType.getBaseType().getTableClassName()
                                ) :
                                ParameterizedTypeName.get(
                                        dtoType.getModifiers().contains(DtoTypeModifier.INPUT) ?
                                                org.babyfish.jimmer.apt.immutable.generator.Constants.VIEWABLE_INPUT_CLASS_NAME :
                                                org.babyfish.jimmer.apt.immutable.generator.Constants.VIEW_CLASS_NAME,
                                        dtoType.getBaseType().getClassName()
                                )
                );
        if (parent == null) {
            typeBuilder.addAnnotation(
                    AnnotationSpec
                            .builder(org.babyfish.jimmer.apt.immutable.generator.Constants.GENERATED_BY_CLASS_NAME)
                            .addMember(
                                    "file",
                                    "$S",
                                    dtoType.getDtoFilePath()
                            )
                            .build()
            );
        }
        for (Anno anno : dtoType.getAnnotations()) {
            typeBuilder.addAnnotation(annotationOf(anno));
        }
        if (innerClassName != null) {
            typeBuilder.addModifiers(Modifier.STATIC);
            addMembers();
        } else {
            addMembers();
        }
        if (innerClassName != null) {
            parent.typeBuilder.addType(typeBuilder.build());
        } else {
            try {
                JavaFile
                        .builder(
                                root.dtoType.getPackageName(),
                                typeBuilder.build()
                        )
                        .indent("    ")
                        .build()
                        .writeTo(filer);
            } catch (IOException ex) {
                throw new GeneratorException(
                        String.format(
                                "Cannot generate dto type '%s' for '%s'",
                                dtoType.getName(),
                                dtoType.getBaseType().getQualifiedName()
                        ),
                        ex
                );
            }
        }
    }

    public String getSimpleName() {
        return innerClassName != null ? innerClassName : dtoType.getName();
    }

    private ClassName getDtoClassName() {
        if (innerClassName != null) {
            List<String> list = new ArrayList<>();
            collectNames(list);
            return ClassName.get(
                    root.dtoType.getPackageName(),
                    list.get(0),
                    list.subList(1, list.size()).toArray(EMPTY_STR_ARR)
            );
        }
        return ClassName.get(
                root.dtoType.getPackageName(),
                dtoType.getName()
        );
    }

    private void addMembers() {

        boolean isSpecification = dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION);
        if (!isSpecification) {
            addMetadata();
        }

        if (!dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
            for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
                addAccessorField(prop);
            }
        }
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            addField(prop);
        }
        for (UserProp prop : dtoType.getUserProps()) {
            addField(prop);
        }

        addDefaultConstructor();
        if (!isSpecification) {
            addConverterConstructor();
            addOf();
        }

        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            addAccessors(prop);
        }
        for (UserProp prop : dtoType.getUserProps()) {
            addAccessors(prop);
        }

        if (dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
            addEntityType();
            addApplyTo();
        } else {
            addToEntity();
        }

        addHashCode();
        addEquals();
        addToString();

        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            addSpecificationConverter(prop);
        }

        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            if (prop.isNewTarget() && prop.getTargetType() != null && prop.getTargetType().getName() == null) {
                new DtoGenerator(
                        prop.getTargetType(),
                        null,
                        this,
                        targetSimpleName(prop)
                ).generate();
            }
        }
    }

    private void addMetadata() {
        FieldSpec.Builder builder = FieldSpec
                .builder(
                        ParameterizedTypeName.get(
                                org.babyfish.jimmer.apt.immutable.generator.Constants.VIEW_METADATA_CLASS_NAME,
                                dtoType.getBaseType().getClassName(),
                                getDtoClassName()
                        ),
                        "METADATA"
                )
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC, Modifier.FINAL);
        CodeBlock.Builder cb = CodeBlock
                .builder()
                .indent()
                .add("\n")
                .add(
                        "new $T<$T, $T>(\n",
                        org.babyfish.jimmer.apt.immutable.generator.Constants.VIEW_METADATA_CLASS_NAME,
                        dtoType.getBaseType().getClassName(),
                        getDtoClassName()
                )
                .indent()
                .add("$T.$L", dtoType.getBaseType().getFetcherClassName(), "$")
                .indent();
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            if (prop.getNextProp() == null) {
                addFetcherField(prop, cb);
            }
        }
        for (DtoProp<ImmutableType, ImmutableProp> hiddenProp : dtoType.getHiddenFlatProps()) {
            addHiddenFetcherField(hiddenProp, cb);
        }
        cb
                .add(",\n")
                .unindent()
                .add("$T::new\n", getDtoClassName())
                .unindent()
                .unindent()
                .add(")");
        builder.initializer(cb.build());
        typeBuilder.addField(builder.build());
    }

    private void addFetcherField(DtoProp<ImmutableType, ImmutableProp> prop, CodeBlock.Builder cb) {
        if (prop.getBaseProp().getAnnotation(Id.class) == null) {
            if (prop.getTargetType() != null) {
                if (prop.isNewTarget()) {
                    cb.add("\n.$N($T.METADATA.getFetcher()", prop.getBaseProp().getName(), getPropElementName(prop));
                    if (prop.isRecursive()) {
                        cb.add(", $T::recursive", org.babyfish.jimmer.apt.immutable.generator.Constants.RECURSIVE_FIELD_CONFIG_CLASS_NAME);
                    }
                    cb.add(")");
                }
            } else {
                cb.add("\n.$N()", prop.getBaseProp().getName());
            }
        }
    }

    private void addAccessorField(DtoProp<ImmutableType, ImmutableProp> prop) {
        if (isSimpleProp(prop)) {
            return;
        }
        FieldSpec.Builder builder = FieldSpec.builder(
                org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME,
                StringUtil.snake(prop.getName() + "Accessor", StringUtil.SnakeCase.UPPER),
                Modifier.PRIVATE,
                Modifier.STATIC,
                Modifier.FINAL
        );
        CodeBlock.Builder cb = CodeBlock.builder();
        cb.add("new $T(", org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME);
        cb.indent();

        DtoProp<ImmutableType, ImmutableProp> tailProp = prop.toTailProp();
        if (prop.isNullable() && (
                !prop.toTailProp().getBaseProp().isNullable() ||
                        dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION) ||
                        dtoType.getModifiers().contains(DtoTypeModifier.DYNAMIC))
        ) {
            cb.add("\nfalse");
        } else {
            cb.add("\ntrue");
        }

        if (prop.getNextProp() == null) {
            cb.add(",\nnew int[] { $T.$L }", dtoType.getBaseType().getProducerClassName(), prop.getBaseProp().getSlotName());
        } else {
            cb.add(",\nnew int[] {");
            cb.indent();
            boolean addComma = false;
            for (DtoProp<ImmutableType, ImmutableProp> p = prop; p != null; p = p.getNextProp()) {
                if (addComma) {
                    cb.add(",");
                } else {
                    addComma = true;
                }
                cb.add("\n$T.$L", p.getBaseProp().getDeclaringType().getProducerClassName(), p.getBaseProp().getSlotName());
            }
            cb.unindent();
            cb.add("\n}");
        }

        if (prop.isIdOnly()) {
            if (dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
                cb.add(",\nnull");
            } else {
                cb.add(
                        ",\n$T.$L($T.class, ",
                        org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME,
                        tailProp.getBaseProp().isList() ? "idListGetter" : "idReferenceGetter",
                        tailProp.getBaseProp().getTargetType().getClassName()
                );
                addConverterLoading(cb, prop, false);
                cb.add(")");
            }
            cb.add(
                    ",\n$T.$L($T.class, ",
                    org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME,
                    tailProp.getBaseProp().isList() ? "idListSetter" : "idReferenceSetter",
                    tailProp.getBaseProp().getTargetType().getClassName()
            );
            addConverterLoading(cb, prop, false);
            cb.add(")");
        } else if (tailProp.getTargetType() != null) {
            if (dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
                cb.add(",\nnull");
            } else {
                cb.add(
                        ",\n$T.<$T, $L>$L($L::new)",
                        org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME,
                        tailProp.getBaseProp().getTargetType().getClassName(),
                        targetSimpleName(tailProp),
                        tailProp.getBaseProp().isList() ? "objectListGetter" : "objectReferenceGetter",
                        targetSimpleName(tailProp)
                );
            }
            cb.add(
                    ",\n$T.$L($L::toEntity)",
                    org.babyfish.jimmer.apt.immutable.generator.Constants.DTO_PROP_ACCESSOR_CLASS_NAME,
                    tailProp.getBaseProp().isList() ? "objectListSetter" : "objectReferenceSetter",
                    targetSimpleName(tailProp)
            );
        } else if (prop.getEnumType() != null) {
            EnumType enumType = prop.getEnumType();
            TypeName enumTypeName = tailProp.getBaseProp().getTypeName();
            if (dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
                cb.add(",\nnull");
            } else {
                cb.add(",\narg -> {\n");
                cb.indent();
                cb.beginControlFlow("switch (($T)arg)", enumTypeName);
                for (Map.Entry<String, String> e: enumType.getValueMap().entrySet()) {
                    cb.add("case $L:\n", e.getKey());
                    cb.indent();
                    cb.addStatement("return $L", e.getValue());
                    cb.unindent();
                }
                cb.add("default:\n");
                cb.indent();
                cb.addStatement(
                        "throw new AssertionError($S)",
                        "Internal bug"
                );
                cb.unindent();
                cb.endControlFlow();
                cb.unindent();
                cb.add("}");
            }
            cb.add(",\narg -> {\n");
            cb.indent();
            addValueToEnum(cb, prop, "arg");
            cb.unindent();
            cb.add("}");
        } else if (converterMetadataOf(prop) != null) {
            cb.add(",\narg -> ");
            addConverterLoading(cb, prop, true);
            cb.add(".output(arg)");
            cb.add(",\narg -> ");
            addConverterLoading(cb, prop, true);
            cb.add(".input(arg)");
        }

        cb.unindent();
        cb.add("\n)");
        builder.initializer(cb.build());
        typeBuilder.addField(builder.build());
    }
    
    private void addValueToEnum(CodeBlock.Builder cb, DtoProp<ImmutableType, ImmutableProp> prop, String variableName) {
        EnumType enumType = prop.getEnumType();
        TypeName enumTypeName = prop.toTailProp().getBaseProp().getTypeName();
        cb.beginControlFlow("switch (($T)$L)", enumType.isNumeric() ? TypeName.INT : org.babyfish.jimmer.apt.immutable.generator.Constants.STRING_CLASS_NAME, variableName);
        for (Map.Entry<String, String> e: enumType.getConstantMap().entrySet()) {
            cb.add("case $L:\n", e.getKey());
            cb.indent();
            cb.addStatement("return $T.$L", enumTypeName, e.getValue());
            cb.unindent();
        }
        cb.add("default:\n");
        cb.indent();
        cb.addStatement(
                "throw new IllegalArgumentException($S + $L + $S)",
                "Illegal value `\"",
                variableName,
                "\"`for enum type: \"" + enumTypeName + "\""
        );
        cb.unindent();
        cb.endControlFlow();
    }

    private void addConverterLoading(CodeBlock.Builder cb, DtoProp<ImmutableType, ImmutableProp> prop, boolean forList) {
        ImmutableProp baseProp = prop.toTailProp().getBaseProp();
        cb.add(
                "$T.$L.unwrap().$L",
                dtoType.getBaseType().getPropsClassName(),
                StringUtil.snake(baseProp.getName(), StringUtil.SnakeCase.UPPER),
                prop.toTailProp().getBaseProp().isAssociation(true) ?
                        "getAssociatedIdConverter(" + forList + ")" :
                        "getConverter()"
        );
    }

    private boolean isSimpleProp(DtoProp<ImmutableType, ImmutableProp> prop) {
        if (prop.getNextProp() != null) {
            return false;
        }
        if (prop.isNullable() && (
                !prop.isBaseNullable() || dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION))) {
            return false;
        }
        return getPropTypeName(prop).equals(prop.getBaseProp().getTypeName());
    }

    private void addHiddenFetcherField(DtoProp<ImmutableType, ImmutableProp> prop, CodeBlock.Builder cb) {
        if (!"flat".equals(prop.getFuncName())) {
            addFetcherField(prop, cb);
            return;
        }
        DtoType<ImmutableType, ImmutableProp> targetDtoType = prop.getTargetType();
        assert targetDtoType != null;
        cb.add("\n.$N($>", prop.getBaseProp().getName());
        cb.add("$T.$L$>", prop.getBaseProp().getTargetType().getFetcherClassName(), "$");
        for (DtoProp<ImmutableType, ImmutableProp> childProp : targetDtoType.getDtoProps()) {
            addHiddenFetcherField(childProp, cb);
        }
        cb.add("$<$<\n)");
    }

    private void addField(DtoProp<ImmutableType, ImmutableProp> prop) {
        TypeName typeName = getPropTypeName(prop);
        FieldSpec.Builder builder = FieldSpec
                .builder(typeName, prop.getName())
                .addModifiers(Modifier.PRIVATE);
        for (AnnotationMirror annotationMirror : prop.getBaseProp().getAnnotations()) {
            if (isCopyableAnnotation(annotationMirror, false) &&
                prop.getAnnotations().stream().noneMatch(
                        it -> it.getQualifiedName().equals(Annotations.qualifiedName(annotationMirror))
                )
            ) {
                builder.addAnnotation(AnnotationSpec.get(annotationMirror));
            }
        }
        for (Anno anno : prop.getAnnotations()) {
            builder.addAnnotation(annotationOf(anno));
        }
        if (!typeName.isPrimitive()) {
            if (prop.isNullable()) {
                builder.addAnnotation(Nullable.class);
            } else {
                builder.addAnnotation(NotNull.class);
            }
        }
        typeBuilder.addField(builder.build());
    }

    private void addAccessors(DtoProp<ImmutableType, ImmutableProp> prop) {
        TypeName typeName = getPropTypeName(prop);
        String suffix = prop.getName();
        if (suffix.startsWith("is") &&
                suffix.length() > 2 &&
                Character.isUpperCase(suffix.charAt(2)) &&
                typeName.equals(TypeName.BOOLEAN)) {
            suffix = suffix.substring(2);
        }
        MethodSpec.Builder getterBuilder = MethodSpec
                .methodBuilder(
                        StringUtil.identifier(
                                typeName.equals(TypeName.BOOLEAN) ? "is" : "get",
                                suffix
                        )
                )
                .addModifiers(Modifier.PUBLIC)
                .returns(typeName);
        if (!typeName.isPrimitive()) {
            if (prop.isNullable()) {
                getterBuilder.addAnnotation(Nullable.class);
            } else {
                getterBuilder.addAnnotation(NotNull.class);
            }
        }
        getterBuilder.addStatement("return $L", prop.getName());
        typeBuilder.addMethod(getterBuilder.build());

        ParameterSpec.Builder parameterBuilder = ParameterSpec.builder(typeName, prop.getName());
        if (!typeName.isPrimitive()) {
            if (prop.isNullable()) {
                parameterBuilder.addAnnotation(Nullable.class);
            } else {
                parameterBuilder.addAnnotation(NotNull.class);
            }
        }
        MethodSpec.Builder setterBuilder = MethodSpec
                .methodBuilder(StringUtil.identifier("set", suffix))
                .addParameter(parameterBuilder.build())
                .addModifiers(Modifier.PUBLIC);
        setterBuilder.addStatement("this.$L = $L", prop.getName(), prop.getName());
        typeBuilder.addMethod(setterBuilder.build());
    }

    private void addField(UserProp prop) {
        TypeName typeName = getTypeName(prop.getTypeRef());
        FieldSpec.Builder builder = FieldSpec
                .builder(typeName, prop.getAlias())
                .addModifiers(Modifier.PRIVATE);
        for (Anno anno : prop.getAnnotations()) {
            builder.addAnnotation(annotationOf(anno));
        }
        if (!typeName.isPrimitive()) {
            if (prop.getTypeRef().isNullable()) {
                builder.addAnnotation(Nullable.class);
            } else {
                builder.addAnnotation(NotNull.class);
            }
        }
        typeBuilder.addField(builder.build());
    }

    private void addAccessors(UserProp prop) {
        TypeName typeName = getTypeName(prop.getTypeRef());
        String suffix = prop.getAlias();
        if (suffix.startsWith("is") &&
                suffix.length() > 2 &&
                Character.isUpperCase(suffix.charAt(2)) &&
                typeName.equals(TypeName.BOOLEAN)) {
            suffix = suffix.substring(2);
        }
        MethodSpec.Builder getterBuilder = MethodSpec
                .methodBuilder(
                        StringUtil.identifier(
                                typeName.equals(TypeName.BOOLEAN) ? "is" : "get",
                                suffix
                        )
                )
                .addModifiers(Modifier.PUBLIC)
                .returns(typeName);
        if (!typeName.isPrimitive()) {
            if (prop.getTypeRef().isNullable()) {
                getterBuilder.addAnnotation(Nullable.class);
            } else {
                getterBuilder.addAnnotation(NotNull.class);
            }
        }
        getterBuilder.addStatement("return $L", prop.getAlias());
        typeBuilder.addMethod(getterBuilder.build());

        ParameterSpec.Builder parameterBuilder = ParameterSpec.builder(typeName, prop.getAlias());
        if (!typeName.isPrimitive()) {
            if (prop.getTypeRef().isNullable()) {
                parameterBuilder.addAnnotation(Nullable.class);
            } else {
                parameterBuilder.addAnnotation(NotNull.class);
            }
        }
        MethodSpec.Builder setterBuilder = MethodSpec
                .methodBuilder(StringUtil.identifier("set", suffix))
                .addParameter(parameterBuilder.build())
                .addModifiers(Modifier.PUBLIC);
        setterBuilder.addStatement("this.$L = $L", prop.getAlias(), prop.getAlias());
        typeBuilder.addMethod(setterBuilder.build());
    }

    private void addOf() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("of")
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
                .addParameter(
                        ParameterSpec
                                .builder(dtoType.getBaseType().getClassName(), "base")
                                .addAnnotation(NotNull.class)
                                .build()
                )
                .returns(getDtoClassName())
                .addCode("return new $T(base);", getDtoClassName());
        typeBuilder.addMethod(builder.build());
    }

    private void addDefaultConstructor() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PUBLIC);
        typeBuilder.addMethod(builder.build());
    }

    private void addConverterConstructor() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PUBLIC)
                .addParameter(
                        ParameterSpec
                                .builder(dtoType.getBaseType().getClassName(), "base")
                                .addAnnotation(NotNull.class)
                                .build()
                );
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            if (isSimpleProp(prop)) {
                if (prop.isNullable()) {
                    builder.addStatement(
                            "this.$L = (($T)base).__isLoaded($T.byIndex($T.$L)) ? base.$L() : null",
                            prop.getName(),
                            ImmutableSpi.class,
                            org.babyfish.jimmer.apt.immutable.generator.Constants.PROP_ID_CLASS_NAME,
                            dtoType.getBaseType().getProducerClassName(),
                            prop.getBaseProp().getSlotName(),
                            prop.getBaseProp().getGetterName()
                    );
                } else {
                    builder.addStatement(
                            "this.$L = base.$L()",
                            prop.getName(),
                            prop.getBaseProp().getGetterName()
                    );
                }
            } else {
                if (!prop.isNullable() && prop.isBaseNullable()) {
                    builder.addStatement(
                            "this.$L = $L.get($>\n" +
                                    "base,\n" +
                                    "$S\n" +
                                    "$<)",
                            prop.getName(),
                            StringUtil.snake(prop.getName() + "Accessor", StringUtil.SnakeCase.UPPER),
                            "Cannot convert \"" +
                                    dtoType.getBaseType().getClassName() +
                                    "\" to " +
                                    "\"" +
                                    getDtoClassName() +
                                    "\" because the cannot get non-null " +
                                    "value for \"" +
                                    prop.getName() +
                                    "\""
                    );
                } else {
                    builder.addStatement(
                            "this.$L = $L.get(base)",
                            prop.getName(),
                            StringUtil.snake(prop.getName() + "Accessor", StringUtil.SnakeCase.UPPER)
                    );
                }
            }
        }
        typeBuilder.addMethod(builder.build());
    }

    private void addToEntity() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("toEntity")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(dtoType.getBaseType().getClassName());
        builder.addCode(
                "return $T.$L.produce(__draft -> {$>\n",
                dtoType.getBaseType().getDraftClassName(),
                "$"
        );
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            if (prop.getBaseProp().isJavaFormula()) {
                continue;
            }
            boolean check = prop.isNullable() && dtoType.getModifiers().contains(DtoTypeModifier.DYNAMIC);
            if (check) {
                builder.beginControlFlow("if ($L != null)", prop.getName());
            }
            if (isSimpleProp(prop)) {
                builder.addStatement("__draft.$L($L)", prop.getBaseProp().getSetterName(), prop.getName());
            } else {
                ImmutableProp tailBaseProp = prop.toTailProp().getBaseProp();
                if (tailBaseProp.isList() && tailBaseProp.isAssociation(true)) {
                    builder.addStatement(
                            "$L.set(__draft, $L != null ? $L : $T.emptyList())",
                            StringUtil.snake(prop.getName() + "Accessor", StringUtil.SnakeCase.UPPER),
                            prop.getName(),
                            prop.getName(),
                            org.babyfish.jimmer.apt.immutable.generator.Constants.COLLECTIONS_CLASS_NAME
                    );
                } else {
                    builder.addStatement(
                            "$L.set(__draft, $L)",
                            StringUtil.snake(prop.getName() + "Accessor", StringUtil.SnakeCase.UPPER),
                            prop.getName()
                    );
                }
            }
            if (check) {
                builder.endControlFlow();
            }
        }
        builder.addCode("$<});\n");
        typeBuilder.addMethod(builder.build());
    }

    private void addEntityType() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("entityType")
                .returns(
                        ParameterizedTypeName.get(
                                org.babyfish.jimmer.apt.immutable.generator.Constants.CLASS_CLASS_NAME,
                                dtoType.getBaseType().getClassName()
                        )
                )
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .addStatement("return $T.class", dtoType.getBaseType().getClassName());
        typeBuilder.addMethod(builder.build());
    }

    private void addApplyTo() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("applyTo")
                .addAnnotation(Override.class)
                .addModifiers(Modifier.PUBLIC)
                .addParameter(
                        ParameterSpec.builder(
                                ParameterizedTypeName.get(
                                        org.babyfish.jimmer.apt.immutable.generator.Constants.SPECIFICATION_ARGS_CLASS_NAME,
                                        dtoType.getBaseType().getClassName(),
                                        dtoType.getBaseType().getTableClassName()
                                ),
                                "args"
                        ).build()
                );
        List<ImmutableProp> stack = Collections.emptyList();
        builder.addStatement("$T __applier = args.getApplier()", org.babyfish.jimmer.apt.immutable.generator.Constants.PREDICATE_APPLIER_CLASS_NAME);
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            List<ImmutableProp> newStack = new ArrayList<>(stack.size() + 2);
            DtoProp<ImmutableType, ImmutableProp> tailProp = prop.toTailProp();
            for (DtoProp<ImmutableType, ImmutableProp> p = prop; p != null; p = p.getNextProp()) {
                if (p != tailProp || p.getTargetType() != null) {
                    newStack.add(p.getBaseProp());
                }
            }
            stack = addStackOperations(builder, stack, newStack);
            addPredicateOperation(builder, tailProp);
        }
        addStackOperations(builder, stack, Collections.emptyList());
        typeBuilder.addMethod(builder.build());
    }

    private List<ImmutableProp> addStackOperations(
            MethodSpec.Builder builder,
            List<ImmutableProp> stack,
            List<ImmutableProp> newStack
    ) {
        int size = Math.min(stack.size(), newStack.size());
        int sameCount = size;
        for (int i = 0; i < size; i++) {
            if (stack.get(i) != newStack.get(i)) {
                sameCount = i;
                break;
            }
        }
        for (int i = stack.size() - sameCount; i > 0; --i) {
            builder.addStatement("__applier.pop()");
        }
        for (ImmutableProp prop : newStack.subList(sameCount, newStack.size())) {
            builder.addStatement(
                    "__applier.push($T.$L.unwrap())",
                    prop.getDeclaringType().getPropsClassName(),
                    StringUtil.snake(prop.getName(), StringUtil.SnakeCase.UPPER)
            );
        }
        return newStack;
    }

    private void addPredicateOperation(MethodSpec.Builder builder, DtoProp<ImmutableType, ImmutableProp> prop) {

        if (prop.getTargetType() != null) {
            builder.beginControlFlow("if (this.$L != null)", prop.getName());
            builder.addStatement("this.$L.applyTo(args.child())", prop.getName());
            builder.endControlFlow();
            return;
        }

        String funcName = prop.getFuncName();
        if (funcName == null) {
            funcName = "eq";
        } else if ("null".equals(funcName)) {
            funcName = "isNull";
        } else if ("notNull".equals(funcName)) {
            funcName = "isNotNull";
        } else if ("id".equals(funcName)) {
            funcName = "associatedIdEq";
        }

        CodeBlock.Builder cb = CodeBlock.builder();
        if (org.babyfish.jimmer.dto.compiler.Constants.MULTI_ARGS_FUNC_NAMES.contains(funcName)) {
            cb.add("__applier.$L(new $T[] { ", funcName, org.babyfish.jimmer.apt.immutable.generator.Constants.IMMUTABLE_PROP_CLASS_NAME);
            boolean addComma = false;
            for (ImmutableProp baseProp : prop.getBasePropMap().values()) {
                if (addComma) {
                    cb.add(", ");
                } else {
                    addComma = true;
                }
                cb.add(
                        "$T.$L.unwrap()",
                        baseProp.getDeclaringType().getPropsClassName(),
                        StringUtil.snake(baseProp.getName(), StringUtil.SnakeCase.UPPER)
                );
            }
            cb.add(" }, ");
        } else {
            cb.add(
                    "__applier.$L($T.$L.unwrap(), ",
                    funcName,
                    prop.getBaseProp().getDeclaringType().getPropsClassName(),
                    StringUtil.snake(prop.getBaseProp().getName(), StringUtil.SnakeCase.UPPER)
            );
        }
        if (isSpecificationConverterRequired(prop)) {
            cb.add(
                    "$L(this.$L)",
                    StringUtil.identifier("__convert", prop.getName()),
                    prop.getName()
            );
        } else {
            cb.add("this.$L", prop.getName());
        }
        if ("like".equals(funcName) || "notLike".equals(funcName)) {
            cb.add(", ");
            cb.add(prop.getLikeOptions().contains(LikeOption.INSENSITIVE) ? "true" : "false");
            cb.add(", ");
            cb.add(prop.getLikeOptions().contains(LikeOption.MATCH_START) ? "true" : "false");
            cb.add(", ");
            cb.add(prop.getLikeOptions().contains(LikeOption.MATCH_END) ? "true" : "false");
        }
        cb.addStatement(")");
        builder.addCode(cb.build());
    }

    private void addSpecificationConverter(DtoProp<ImmutableType, ImmutableProp> prop) {
        if (!isSpecificationConverterRequired(prop)) {
            return;
        }
        ImmutableProp baseProp = prop.toTailProp().getBaseProp();
        TypeName baseTypeName = null;
        String funcName = prop.getFuncName();
        if (funcName != null) {
            switch (funcName) {
                case "id":
                    baseTypeName = baseProp.getTargetType().getIdProp().getTypeName();
                    if (baseProp.isList() && !dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
                        baseTypeName = ParameterizedTypeName.get(
                                org.babyfish.jimmer.apt.immutable.generator.Constants.LIST_CLASS_NAME,
                                baseTypeName.box()
                        );
                    }
                    break;
                case "associatedIdEq":
                case "associatedIdNe":
                    baseTypeName = baseProp.getTargetType().getIdProp().getTypeName();
                case "associatedIdIn":
                case "associatedIdNotIn":
                    baseTypeName = ParameterizedTypeName.get(
                            org.babyfish.jimmer.apt.immutable.generator.Constants.LIST_CLASS_NAME,
                            baseProp.getTargetType().getIdProp().getTypeName().box()
                    );
            }
        }
        if (baseTypeName == null) {
            baseTypeName = baseProp.getTypeName();
        }
        baseTypeName = baseTypeName.box();
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(StringUtil.identifier("__convert", prop.getName()))
                .addModifiers(Modifier.PRIVATE)
                .addParameter(getPropTypeName(prop), "value")
                .returns(baseTypeName);
        CodeBlock.Builder cb = CodeBlock.builder();
        cb.beginControlFlow("if ($L == null)", prop.getName());
        cb.addStatement("return null");
        cb.endControlFlow();
        if (prop.getEnumType() != null) {
            addValueToEnum(cb, prop, "value");
        } else {
            cb.addStatement(
                    "return $T.$L.unwrap().<$T, $T>$L.input(value)",
                    dtoType.getBaseType().getPropsClassName(),
                    StringUtil.snake(baseProp.getName(), StringUtil.SnakeCase.UPPER),
                    baseTypeName,
                    getPropTypeName(prop).box(),
                    baseProp.isAssociation(true) ?
                            "getAssociatedIdConverter(true)" :
                            "getConverter()"
            );
        }
        builder.addCode(cb.build());
        typeBuilder.addMethod(builder.build());
    }

    public TypeName getPropTypeName(DtoProp<ImmutableType, ImmutableProp> prop) {

        ImmutableProp baseProp = prop.toTailProp().getBaseProp();

        EnumType enumType = prop.getEnumType();
        if (enumType != null) {
            if (enumType.isNumeric()) {
                return prop.isNullable() ? TypeName.INT.box() : TypeName.INT;
            }
            return org.babyfish.jimmer.apt.immutable.generator.Constants.STRING_CLASS_NAME;
        }
        ConverterMetadata metadata = converterMetadataOf(prop);
        if (metadata != null) {
            return metadata.getTargetTypeName();
        }

        if (dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
            String funcName = prop.toTailProp().getFuncName();
            if (funcName != null) {
                switch (funcName) {
                    case "null":
                    case "notNull":
                        return TypeName.BOOLEAN;
                    case "valueIn":
                    case "valueNotIn":
                        return ParameterizedTypeName.get(
                                org.babyfish.jimmer.apt.immutable.generator.Constants.COLLECTION_CLASS_NAME,
                                getPropElementName(prop).box()
                        );
                    case "id":
                    case "associatedIdEq":
                    case "associatedIdNe":
                        return baseProp.getTargetType().getIdProp().getClientTypeName();
                    case "associatedIdIn":
                    case "associatedIdNotIn":
                        return ParameterizedTypeName.get(
                                org.babyfish.jimmer.apt.immutable.generator.Constants.COLLECTION_CLASS_NAME,
                                baseProp.getTargetType().getIdProp().getClientTypeName().box()
                        );
                }
            }
            if (baseProp.isAssociation(true)) {
                return getPropElementName(prop);
            }
        }

        TypeName elementTypeName = getPropElementName(prop);
        return baseProp.isList() ?
                ParameterizedTypeName.get(
                        org.babyfish.jimmer.apt.immutable.generator.Constants.LIST_CLASS_NAME,
                        elementTypeName.isPrimitive() ?
                                elementTypeName.box() :
                                elementTypeName
                ) :
                elementTypeName;
    }

    public TypeName getTypeName(@Nullable TypeRef typeRef) {
        if (typeRef == null) {
            return WildcardTypeName.subtypeOf(TypeName.OBJECT);
        }
        TypeName typeName;
        switch (typeRef.getTypeName()) {
            case "Boolean":
                typeName = typeRef.isNullable() ? TypeName.BOOLEAN.box() : TypeName.BOOLEAN;
                break;
            case "Char":
                typeName = typeRef.isNullable() ? TypeName.CHAR.box() : TypeName.CHAR;
                break;
            case "Byte":
                typeName = typeRef.isNullable() ? TypeName.BYTE.box() : TypeName.BYTE;
                break;
            case "Short":
                typeName = typeRef.isNullable() ? TypeName.SHORT.box() : TypeName.SHORT;
                break;
            case "Int":
                typeName = typeRef.isNullable() ? TypeName.INT.box() : TypeName.INT;
                break;
            case "Long":
                typeName = typeRef.isNullable() ? TypeName.LONG.box() : TypeName.LONG;
                break;
            case "Float":
                typeName = typeRef.isNullable() ? TypeName.FLOAT.box() : TypeName.FLOAT;
                break;
            case "Double":
                typeName = typeRef.isNullable() ? TypeName.DOUBLE.box() : TypeName.DOUBLE;
                break;
            case "Any":
                typeName = TypeName.OBJECT;
                break;
            case "String":
                typeName = org.babyfish.jimmer.apt.immutable.generator.Constants.STRING_CLASS_NAME;
                break;
            case "Array":
                typeName = ArrayTypeName.of(
                        typeRef.getArguments().get(0).getTypeRef() == null ?
                                TypeName.OBJECT :
                                getTypeName(typeRef.getArguments().get(0).getTypeRef())
                );
                break;
            case "Iterable":
            case "MutableIterable":
                typeName = ClassName.get(Iterable.class);
                break;
            case "Collection":
            case "MutableCollection":
                typeName = ClassName.get(Collection.class);
                break;
            case "List":
            case "MutableList":
                typeName = ClassName.get(List.class);
                break;
            case "Set":
            case "MutableSet":
                typeName = ClassName.get(Set.class);
                break;
            case "Map":
            case "MutableMap":
                typeName = ClassName.get(Map.class);
                break;
            default:
                typeName = ClassName.bestGuess(typeRef.getTypeName());
                break;
        }
        int argCount = typeRef.getArguments().size();
        if (argCount == 0 || typeName instanceof ArrayTypeName) {
            return typeName;
        }
        TypeName[] argTypeNames = new TypeName[argCount];
        for (int i = 0; i < argCount; i++) {
            TypeRef.Argument arg = typeRef.getArguments().get(i);
            TypeName argTypeName = getTypeName(arg.getTypeRef());
            if (arg.isIn()) {
                argTypeName = WildcardTypeName.supertypeOf(argTypeName);
            } else if (arg.getTypeRef() != null && (arg.isOut() || isForceOut(typeRef.getTypeName()))) {
                argTypeName = WildcardTypeName.subtypeOf(argTypeName);
            }
            argTypeNames[i] = argTypeName;
        }
        return ParameterizedTypeName.get(
                (ClassName) typeName,
                argTypeNames
        );
    }

    private void addHashCode() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("hashCode")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(TypeName.INT);
        boolean first = true;
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            CodeBlock.Builder cb = CodeBlock.builder();
            if (first) {
                cb.add("int hash = ");
                first = false;
            } else {
                cb.add("hash = hash * 31 + ");
            }
            TypeName typeName = getPropTypeName(prop);
            if (typeName.isPrimitive()) {
                cb.add(
                        "$T.hashCode($L)",
                        typeName.box(),
                        prop.getName().equals("hash") ? "this." + prop.getName() : prop.getName()
                );
            } else {
                cb.add("$T.hashCode($L)", Objects.class, prop.getName());
            }
            builder.addStatement(cb.build());
        }
        for (UserProp prop : dtoType.getUserProps()) {
            CodeBlock.Builder cb = CodeBlock.builder();
            if (first) {
                cb.add("int hash = ");
                first = false;
            } else {
                cb.add("hash = hash * 31 + ");
            }
            TypeName typeName = getTypeName(prop.getTypeRef());
            if (typeName.isPrimitive()) {
                cb.add(
                        "$T.hashCode($L)",
                        typeName.box(),
                        prop.getAlias().equals("hash") ? "this." + prop.getAlias() : prop.getAlias()
                );
            } else {
                cb.add("$T.hashCode($L)", Objects.class, prop.getAlias());
            }
            builder.addStatement(cb.build());
        }
        builder.addStatement(first ? "return 0" : "return hash");
        typeBuilder.addMethod(builder.build());
    }

    private void addEquals() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("equals")
                .addModifiers(Modifier.PUBLIC)
                .addParameter(TypeName.OBJECT, "o")
                .addAnnotation(Override.class)
                .returns(TypeName.BOOLEAN);
        builder.beginControlFlow("if (o == null || this.getClass() != o.getClass())")
                .addStatement("return false")
                .endControlFlow();
        builder.addStatement("$L other = ($L) o", getSimpleName(), getSimpleName());
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            String propName = prop.getName();
            String thisProp = propName.equals("o") || propName.equals("other") ? "this" + propName : propName;
            if (getPropTypeName(prop).isPrimitive()) {
                builder.beginControlFlow("if ($L != other.$L)", thisProp, propName);
            } else {
                builder.beginControlFlow("if (!$T.equals($L, other.$L))", Objects.class, thisProp, propName);
            }
            builder.addStatement("return false");
            builder.endControlFlow();
        }
        for (UserProp prop : dtoType.getUserProps()) {
            String propName = prop.getAlias();
            String thisProp = propName.equals("o") || propName.equals("other") ? "this" + propName : propName;
            if (getTypeName(prop.getTypeRef()).isPrimitive()) {
                builder.beginControlFlow("if ($L != other.$L)", thisProp, propName);
            } else {
                builder.beginControlFlow("if (!$T.equals($L, other.$L))", Objects.class, thisProp, propName);
            }
            builder.addStatement("return false");
            builder.endControlFlow();
        }
        builder.addStatement("return true");
        typeBuilder.addMethod(builder.build());
    }

    private void addToString() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("toString")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(org.babyfish.jimmer.apt.immutable.generator.Constants.STRING_CLASS_NAME);
        builder.addStatement("StringBuilder builder = new StringBuilder()");
        addSimpleName(builder, true);
        String separator = "";
        for (DtoProp<ImmutableType, ImmutableProp> prop : dtoType.getDtoProps()) {
            if (prop.getName().equals("builder")) {
                builder.addStatement("builder.append($S).append(this.$L)", separator + prop.getName() + '=', prop.getName());
            } else {
                builder.addStatement("builder.append($S).append($L)", separator + prop.getName() + '=', prop.getName());
            }
            separator = ", ";
        }
        for (UserProp prop : dtoType.getUserProps()) {
            if (prop.getAlias().equals("builder")) {
                builder.addStatement("builder.append($S).append(this.$L)", separator + prop.getAlias() + '=', prop.getAlias());
            } else {
                builder.addStatement("builder.append($S).append($L)", separator + prop.getAlias() + '=', prop.getAlias());
            }
            separator = ", ";
        }
        builder.addStatement("builder.append(')')");
        builder.addStatement("return builder.toString()");
        typeBuilder.addMethod(builder.build());
    }

    private void addSimpleName(MethodSpec.Builder builder, boolean isLeaf) {
        if (parent != null) {
            parent.addSimpleName(builder, false);
        }
        builder.addStatement("builder.append($S).append('$L')", getSimpleName(), isLeaf ? "(" : ".");
    }

    public TypeName getPropElementName(DtoProp<ImmutableType, ImmutableProp> prop) {
        DtoProp<ImmutableType, ImmutableProp> tailProp = prop.toTailProp();
        DtoType<ImmutableType, ImmutableProp> targetType = tailProp.getTargetType();
        if (targetType != null) {
            if (targetType.getName() == null) {
                List<String> list = new ArrayList<>();
                collectNames(list);
                if (tailProp.isNewTarget()) {
                    list.add(targetSimpleName(tailProp));
                }
                return ClassName.get(
                        root.dtoType.getPackageName(),
                        list.get(0),
                        list.subList(1, list.size()).toArray(EMPTY_STR_ARR)
                );
            }
            return ClassName.get(
                    root.dtoType.getPackageName(),
                    targetType.getName()
            );
        }
        ImmutableProp baseProp = tailProp.getBaseProp();
        TypeName typeName;
        if (tailProp.isIdOnly()) {
            typeName = tailProp.getBaseProp().getTargetType().getIdProp().getTypeName();
        } else if (baseProp.getIdViewBaseProp() != null) {
            typeName = baseProp.getIdViewBaseProp().getTargetType().getIdProp().getClientTypeName();
        } else {
            typeName = tailProp.getBaseProp().getClientTypeName();
        }
        if (typeName.isPrimitive() && prop.isNullable()) {
            return typeName.box();
        }
        return typeName;
    }

    private void collectNames(List<String> list) {
        if (parent == null) {
            list.add(dtoType.getName());
        } else {
            parent.collectNames(list);
            list.add(innerClassName);
        }
    }

    private String targetSimpleName(DtoProp<ImmutableType, ImmutableProp> prop) {
        DtoType<ImmutableType, ImmutableProp> targetType = prop.getTargetType();
        if (targetType == null) {
            throw new IllegalArgumentException("prop is not association");
        }
        if (targetType.getName() != null) {
            return targetType.getName();
        }
        String simpleName = "TargetOf_" + prop.getName();
        if (prop.isNewTarget()) {
            if (depth >= 1) {
                return simpleName + '_' + (depth + 1);
            }
        } else {
            if (depth >= 2) {
                return simpleName + '_' + depth;
            }
        }
        return simpleName;
    }

    private boolean isSpecificationConverterRequired(DtoProp<ImmutableType, ImmutableProp> prop) {
        if (!dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
            return false;
        }
        return prop.getEnumType() != null || converterMetadataOf(prop) != null;
    }

    private ConverterMetadata converterMetadataOf(DtoProp<ImmutableType, ImmutableProp> prop) {
        ImmutableProp baseProp = prop.toTailProp().getBaseProp();
        ConverterMetadata metadata = baseProp.getConverterMetadata();
        if (metadata != null) {
            return metadata;
        }
        String funcName = prop.getFuncName();
        if ("id".equals(funcName)) {
            metadata = baseProp.getTargetType().getIdProp().getConverterMetadata();
            if (metadata != null && baseProp.isList() && !dtoType.getModifiers().contains(DtoTypeModifier.SPECIFICATION)) {
                metadata = metadata.toListMetadata();
            }
            return metadata;
        }
        if ("associatedInEq".equals(funcName) || "associatedInNe".equals(funcName)) {
            return baseProp.getTargetType().getIdProp().getConverterMetadata();
        }
        if ("associatedIdIn".equals(funcName) || "associatedIdNotIn".equals(funcName)) {
            metadata = baseProp.getTargetType().getIdProp().getConverterMetadata();
            if (metadata != null) {
                return metadata.toListMetadata();
            }
        }
        if (baseProp.getIdViewBaseProp() != null) {
            metadata = baseProp.getIdViewBaseProp().getTargetType().getIdProp().getConverterMetadata();
            if (metadata != null) {
                return baseProp.isList() ? metadata.toListMetadata() : metadata;
            }
        }
        return null;
    }

    private static boolean isCopyableAnnotation(AnnotationMirror annotationMirror, boolean forMethod) {
        Target target = annotationMirror.getAnnotationType().asElement().getAnnotation(Target.class);
        if (target != null) {
            boolean acceptField = Arrays.stream(target.value()).anyMatch(it -> it == ElementType.FIELD);
            if (acceptField) {
                String qualifiedName = ((TypeElement) annotationMirror.getAnnotationType().asElement()).getQualifiedName().toString();
                if (isNullityAnnotation(qualifiedName)) {
                    return false;
                }
                return !qualifiedName.startsWith("org.babyfish.jimmer.") ||
                        qualifiedName.startsWith("org.babyfish.jimmer.client.");
            }
        }
        return false;
    }

    private static boolean isNullityAnnotation(String qualifiedName) {
        int lastDotIndex = qualifiedName.lastIndexOf('.');
        if (lastDotIndex != -1) {
            qualifiedName = qualifiedName.substring(lastDotIndex + 1);
        }
        switch (qualifiedName) {
            case "Null":
            case "Nullable":
            case "NotNull":
            case "NonNull":
                return true;
            default:
                return false;
        }
    }

    private static AnnotationSpec annotationOf(Anno anno) {
        AnnotationSpec.Builder builder = AnnotationSpec
                .builder(ClassName.bestGuess(anno.getQualifiedName()));
        for (Map.Entry<String, Anno.Value> e : anno.getValueMap().entrySet()) {
            String name = e.getKey();
            Anno.Value value = e.getValue();
            builder.addMember(name, codeBlockOf(value));
        }
        return builder.build();
    }

    private static CodeBlock codeBlockOf(Anno.Value value) {
        CodeBlock.Builder builder = CodeBlock.builder();
        if (value instanceof Anno.ArrayValue) {
            builder.add("{\n$>");
            boolean addSeparator = false;
            for (Anno.Value element : ((Anno.ArrayValue)value).elements) {
                if (addSeparator) {
                    builder.add(", \n");
                } else {
                    addSeparator = true;
                }
                builder.add("$L", codeBlockOf(element));
            }
            builder.add("$<\n}");
        } else if (value instanceof Anno.AnnoValue) {
            builder.add("$L", annotationOf(((Anno.AnnoValue)value).anno));
        } else if (value instanceof Anno.EnumValue) {
            builder.add(
                    "$T.$L",
                    ClassName.bestGuess(((Anno.EnumValue)value).qualifiedName),
                    ((Anno.EnumValue)value).constant
            );
        } else if (value instanceof Anno.LiteralValue) {
            builder.add(((Anno.LiteralValue)value).value);
        }
        return builder.build();
    }

    private static boolean isForceOut(String typeName) {
        switch (typeName) {
            case "Iterable":
            case "Collection":
            case "List":
            case "Set":
            case "Map":
                return true;
            default:
                return false;
        }
    }
}
