package org.babyfish.jimmer.meta;

import kotlin.reflect.KClass;
import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.JimmerVersion;
import org.babyfish.jimmer.client.ApiIgnore;
import org.babyfish.jimmer.meta.impl.Metadata;
import org.babyfish.jimmer.runtime.DraftContext;
import org.babyfish.jimmer.sql.meta.IdGenerator;
import org.babyfish.jimmer.sql.meta.LogicalDeletedValueGenerator;
import org.babyfish.jimmer.sql.meta.MetadataStrategy;
import org.babyfish.jimmer.sql.meta.SqlContext;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.lang.annotation.Annotation;
import java.util.*;
import java.util.function.BiFunction;

public interface ImmutableType {

    static ImmutableType get(Class<?> javaClass) {
        return Metadata.get(javaClass);
    }

    static ImmutableType tryGet(Class<?> javaClass) {
        return Metadata.tryGet(javaClass);
    }

    static Builder newBuilder(
            String jimmerVersion,
            Class<?> javaClass,
            Collection<ImmutableType> superTypes,
            BiFunction<DraftContext, Object, Draft> draftFactory
    ) {
        if (!JimmerVersion.CURRENT.toString().equals(jimmerVersion)) {
            throw new IllegalStateException(
                    "The version of the annotation processor for handling type \"" +
                            javaClass.getName() +
                            "\" is \"" +
                            jimmerVersion +
                            "\", but the current version of jimmer is \"" +
                            JimmerVersion.CURRENT +
                            "\""
            );
        }
        return Metadata.newTypeBuilder(javaClass, superTypes, draftFactory);
    }

    static Builder newBuilder(
            String jimmerVersion,
            KClass<?> kotlinClass,
            Collection<ImmutableType> superTypes,
            BiFunction<DraftContext, Object, Draft> draftFactory
    ) {
        if (!JimmerVersion.CURRENT.toString().equals(jimmerVersion)) {
            throw new IllegalStateException(
                    "The version of the KSP for handling type \"" +
                            kotlinClass.getQualifiedName() +
                            "\" is \"" +
                            jimmerVersion +
                            "\", but the current version of jimmer is \"" +
                            JimmerVersion.CURRENT +
                            "\""
            );
        }
        return Metadata.newTypeBuilder(kotlinClass, superTypes, draftFactory);
    }

    @NotNull
    Class<?> getJavaClass();

    boolean isKotlinClass();

    boolean isEntity();

    boolean isMappedSuperclass();

    boolean isEmbeddable();

    @NotNull
    Annotation getImmutableAnnotation();

    boolean isAssignableFrom(ImmutableType type);

    @Nullable
    ImmutableType getPrimarySuperType();

    Set<ImmutableType> getSuperTypes();

    Set<ImmutableType> getAllTypes();

    @NotNull
    BiFunction<DraftContext, Object, Draft> getDraftFactory();

    @NotNull
    Map<String, ImmutableProp> getDeclaredProps();

    /**
     * @return The id property declared in this type of super types.
     * <ul>
     *     <li>If the current type is decorated by {@link org.babyfish.jimmer.sql.Entity}, returns non-null value</li>
     *     <li>If the current type is decorated by {@link org.babyfish.jimmer.sql.MappedSuperclass},
     *     find id property in current type of super types, if nothing can be found, return null</li>
     *     <li>Otherwise, always returns null</li>
     * </ul>
     */
    ImmutableProp getIdProp();

    /**
     * @return The version property declared in this type of super types.
     * <ul>
     *     <li>If the current type is decorated by {@link org.babyfish.jimmer.sql.Entity}, returns non-null value</li>
     *     <li>If the current type is decorated by {@link org.babyfish.jimmer.sql.MappedSuperclass},
     *     find version property in current type of super types, if nothing can be found, return null</li>
     *     <li>Otherwise, always returns null</li>
     * </ul>
     */
    @Nullable
    ImmutableProp getVersionProp();

    /**
     * Get the logical deleted property declared in this type, exclude super types
     * @return The logical deleted property, may be null.
     */
    @Nullable
    LogicalDeletedInfo getDeclaredLogicalDeletedInfo();

    /**
     * Get the logical deleted property declared in this type or super types
     * @return The logical deleted property, may be null.
     */
    @Nullable
    LogicalDeletedInfo getLogicalDeletedInfo();

    @NotNull
    Set<ImmutableProp> getKeyProps();

    @NotNull
    Map<String, ImmutableProp> getProps();

    @NotNull
    Map<String, ImmutableProp> getEntityProps();

    @NotNull
    ImmutableProp getProp(String name);

    @NotNull
    ImmutableProp getProp(PropId id);

    Map<String, ImmutableProp> getSelectableProps();

    Map<String, ImmutableProp> getSelectableScalarProps();

    Map<String, ImmutableProp> getSelectableReferenceProps();

    String getMicroServiceName();

    String getTableName(MetadataStrategy strategy);

    IdGenerator getIdGenerator(SqlContext sqlContext);

    LogicalDeletedValueGenerator<?> getLogicalDeletedValueGenerator(SqlContext sqlContext);

    List<ImmutableProp> getPropChain(String columnName, MetadataStrategy strategy);

    interface Builder {

        Builder redefine(String name, int id);

        Builder id(int id, String name, Class<?> elementType);

        Builder key(int id, String name, Class<?> elementType, boolean nullable);

        Builder keyReference(
                int id,
                String name,
                Class<? extends Annotation> associationAnnotationType,
                Class<?> elementType,
                boolean nullable
        );

        Builder version(int id, String name);

        Builder logicalDeleted(
                int id,
                String name,
                Class<?> elementType,
                boolean nullable
        );

        Builder add(
                int id,
                String name,
                ImmutablePropCategory category,
                Class<?> elementType,
                boolean nullable
        );

        Builder add(
                int id,
                String name,
                Class<? extends Annotation> associationType,
                Class<?> elementType,
                boolean nullable
        );

        ImmutableType build();
    }
}
