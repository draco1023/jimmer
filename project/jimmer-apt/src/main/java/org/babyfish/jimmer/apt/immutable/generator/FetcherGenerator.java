package org.babyfish.jimmer.apt.immutable.generator;

import com.squareup.javapoet.*;
import org.babyfish.jimmer.apt.GeneratorException;
import org.babyfish.jimmer.apt.Context;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableProp;
import org.babyfish.jimmer.apt.immutable.meta.ImmutableType;
import org.babyfish.jimmer.lang.NewChain;
import org.babyfish.jimmer.sql.*;

import javax.annotation.processing.Filer;
import javax.lang.model.element.Modifier;
import java.io.IOException;

public class FetcherGenerator {

    private final Context context;

    private final ImmutableType type;

    private final Filer filer;

    private TypeSpec.Builder typeBuilder;

    public FetcherGenerator(
            Context context,
            ImmutableType type,
            Filer filer
    ) {
        this.context = context;
        this.type = type;
        this.filer = filer;
    }

    public void generate() {
        try {
            JavaFile
                    .builder(
                            type.getPackageName(),
                            generateFetcher()
                    )
                    .indent("    ")
                    .build()
                    .writeTo(filer);
        } catch (IOException ex) {
            throw new GeneratorException(
                    String.format(
                            "Cannot generate fetcher class for '%s'",
                            type.getQualifiedName()
                    ),
                    ex
            );
        }
    }

    private TypeSpec generateFetcher() {

        TypeSpec.Builder builder = TypeSpec
                .classBuilder(type.getFetcherClassName().simpleName())
                .addModifiers(Modifier.PUBLIC)
                .superclass(
                        ParameterizedTypeName.get(
                                Constants.ABSTRACT_TYPED_FETCHER_CLASS_NAME,
                                type.getClassName(),
                                type.getFetcherClassName()
                        )
                )
                .addAnnotation(
                        AnnotationSpec
                                .builder(Constants.GENERATED_BY_CLASS_NAME)
                                .addMember("type", "$T.class", type.getClassName())
                                .build()
                );

        TypeSpec.Builder oldBuilder = typeBuilder;
        typeBuilder = builder;
        try {
            add$();
            add$from();
            addConstructor();
            for (ImmutableProp prop : type.getProps().values()) {
                if (prop.getAnnotation(Id.class) == null) {
                    if (isFetchProp(prop)) {
                        addProp(prop);
                        addPropByBoolean(prop);
                        if (prop.isAssociation(true)) {
                            addAssociationProp(prop);
                            if (!prop.isRemote()) {
                                addAssociationPropByFieldConfig(prop);
                            }
                        }
                        addPropByIdOnlyFetchType(prop);
                    }
                }
            }
            addConstructorByNegativeAndReferenceType();
            addConstructorByFieldConfig();
            addCreatorByBoolean();
            addCreatorByFieldConfig();
        } finally {
            typeBuilder = oldBuilder;
        }
        return builder.build();
    }

    private void add$() {
        FieldSpec.Builder builder = FieldSpec
                .builder(type.getFetcherClassName(), "$")
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC, Modifier.FINAL)
                .initializer("new $T(null)", type.getFetcherClassName());
        typeBuilder.addField(builder.build());
    }

    private void add$from() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("$from")
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FETCHER_CLASS_NAME,
                                type.getClassName()
                        ),
                        "base"
                )
                .returns(type.getFetcherClassName())
                .addCode("return base instanceof $T ? \n", type.getFetcherClassName())
                .addCode("\t($T)base : \n", type.getFetcherClassName())
                .addCode(
                        "\tnew $T(($T)base);\n",
                        type.getFetcherClassName(),
                        ParameterizedTypeName.get(
                                Constants.FETCHER_IMPL_CLASS_NAME,
                                type.getClassName()
                        )
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addConstructor() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PRIVATE)
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FETCHER_IMPL_CLASS_NAME,
                                type.getClassName()
                        ),
                        "base"
                )
                .addStatement(
                        "super($T.class, base)",
                        type.getClassName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private boolean isFetchProp(ImmutableProp prop) {
        if (prop.isTransient()) {
            return prop.hasTransientResolver();
        }
        return true;
    }

    private void addProp(ImmutableProp prop) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(NewChain.class)
                .returns(type.getFetcherClassName())
                .addStatement(
                        "return add($S)",
                        prop.getName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addPropByBoolean(ImmutableProp prop) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(NewChain.class)
                .addParameter(boolean.class, "enabled")
                .returns(type.getFetcherClassName())
                .addStatement(
                        "return enabled ? add($S) : remove($S)",
                        prop.getName(),
                        prop.getName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addAssociationProp(ImmutableProp prop) {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(NewChain.class)
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FETCHER_CLASS_NAME,
                                prop.getElementTypeName()
                        ),
                        "childFetcher"
                )
                .returns(type.getFetcherClassName())
                .addStatement(
                        "return add($S, childFetcher)",
                        prop.getName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addAssociationPropByFieldConfig(ImmutableProp prop) {
        boolean recursive = prop.isRecursive();
        ClassName fieldConfigClassName;
        if (recursive && prop.isList()) {
            fieldConfigClassName = Constants.RECURSIVE_LIST_FIELD_CONFIG_CLASS_NAME;
        } else if (recursive) {
            fieldConfigClassName = Constants.RECURSIVE_FIELD_CONFIG_CLASS_NAME;
        } else if (prop.isList()) {
            fieldConfigClassName = Constants.LIST_FIELD_CONFIG_CLASS_NAME;
        } else {
            fieldConfigClassName = Constants.FIELD_CONFIG_CLASS_NAME;
        }
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(NewChain.class)
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FETCHER_CLASS_NAME,
                                prop.getElementTypeName()
                        ),
                        "childFetcher"
                )
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.CONSUMER_CLASS_NAME,
                                ParameterizedTypeName.get(
                                        fieldConfigClassName,
                                        prop.getElementTypeName(),
                                        context.getImmutableType(prop.getElementType()).getTableClassName()
                                )
                        ),
                        "fieldConfig"
                )
                .returns(type.getFetcherClassName())
                .addStatement(
                        "return add($S, childFetcher, fieldConfig)",
                        prop.getName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addPropByIdOnlyFetchType(ImmutableProp prop) {
        ImmutableProp associationProp = prop.getIdViewBaseProp();
        if (associationProp == null) {
            associationProp = prop;
        }
        if (associationProp.isTransient() || !associationProp.isAssociation(true)) {
            return;
        }
        if (prop.isReverse() && prop.getAnnotation(ManyToMany.class) == null && prop.getAnnotation(JoinTable.class) == null) {
            return;
        }
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(prop.getName())
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(NewChain.class)
                .addParameter(
                        Constants.ID_ONLY_FETCH_TYPE,
                        "idOnlyFetchType"
                )
                .returns(type.getFetcherClassName())
                .addStatement(
                        "return add($S, idOnlyFetchType)",
                        prop.getName()
                );
        typeBuilder.addMethod(builder.build());
    }

    private void addConstructorByNegativeAndReferenceType() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PRIVATE)
                .addParameter(type.getFetcherClassName(), "prev")
                .addParameter(org.babyfish.jimmer.meta.ImmutableProp.class, "prop")
                .addParameter(boolean.class, "negative")
                .addParameter(Constants.ID_ONLY_FETCH_TYPE, "idOnlyFetchType")
                .addStatement("super(prev, prop, negative, idOnlyFetchType)");
        typeBuilder.addMethod(builder.build());
    }

    private void addConstructorByFieldConfig() {
        MethodSpec.Builder builder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PRIVATE)
                .addParameter(type.getFetcherClassName(), "prev")
                .addParameter(org.babyfish.jimmer.meta.ImmutableProp.class, "prop")
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FIELD_CONFIG_CLASS_NAME,
                                WildcardTypeName.subtypeOf(Object.class),
                                WildcardTypeName.subtypeOf(
                                        ParameterizedTypeName.get(
                                                Constants.TABLE_CLASS_NAME,
                                                WildcardTypeName.subtypeOf(Object.class)
                                        )
                                )
                        ),
                        "fieldConfig"
                )
                .addStatement("super(prev, prop, fieldConfig)");
        typeBuilder.addMethod(builder.build());
    }

    private void addCreatorByBoolean() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("createFetcher")
                .addModifiers(Modifier.PROTECTED)
                .addParameter(
                        org.babyfish.jimmer.meta.ImmutableProp.class,
                        "prop"
                )
                .addParameter(boolean.class, "negative")
                .addParameter(Constants.ID_ONLY_FETCH_TYPE, "idOnlyFetchType")
                .returns(type.getFetcherClassName())
                .addAnnotation(Override.class)
                .addStatement("return new $T(this, prop, negative, idOnlyFetchType)", type.getFetcherClassName());
        typeBuilder.addMethod(builder.build());
    }

    private void addCreatorByFieldConfig() {
        MethodSpec.Builder builder = MethodSpec
                .methodBuilder("createFetcher")
                .addModifiers(Modifier.PROTECTED)
                .addParameter(
                        org.babyfish.jimmer.meta.ImmutableProp.class,
                        "prop"
                )
                .addParameter(
                        ParameterizedTypeName.get(
                                Constants.FIELD_CONFIG_CLASS_NAME,
                                WildcardTypeName.subtypeOf(Object.class),
                                WildcardTypeName.subtypeOf(
                                        ParameterizedTypeName.get(
                                                Constants.TABLE_CLASS_NAME,
                                                WildcardTypeName.subtypeOf(Object.class)
                                        )
                                )
                        ),
                        "fieldConfig"
                )
                .returns(type.getFetcherClassName())
                .addAnnotation(Override.class)
                .addStatement("return new $T(this, prop, fieldConfig)", type.getFetcherClassName());
        typeBuilder.addMethod(builder.build());
    }
}
