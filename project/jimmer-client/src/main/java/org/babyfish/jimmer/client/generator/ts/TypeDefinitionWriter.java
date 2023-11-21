package org.babyfish.jimmer.client.generator.ts;

import org.babyfish.jimmer.client.meta.*;

import java.lang.reflect.TypeVariable;

public class TypeDefinitionWriter extends TsCodeWriter {

    private final Type type;

    private final boolean mutable;

    public TypeDefinitionWriter(TsContext ctx, Type type, boolean mutable) {
        super(ctx, ctx.getFile(type), mutable);
        this.mutable = mutable;
        if (!type.hasDefinition()) {
            throw new IllegalArgumentException("The type does not have definition");
        }
        this.type = type;
    }

    @Override
    protected void write() {
        if (type instanceof ObjectType) {
            document(((ObjectType)type).getDocument());
            writeObjectType((ObjectType) type, "");
        } else {
            writeEnumType();
        }
    }

    private void writeObjectType(ObjectType objectType, String prefix) {
        String simpleName = prefix  + objectType.getJavaType().getSimpleName();
        code("export interface ").code(simpleName);
        if (objectType instanceof StaticObjectType) {
            StaticObjectType staticObjectType = (StaticObjectType) objectType;
            TypeVariable<? extends Class<?>>[] typeParameters = staticObjectType.getJavaType().getTypeParameters();
            if (typeParameters.length != 0 && staticObjectType.getTypeArguments().isEmpty()) {
                scope(ScopeType.GENERIC, ", ", false, () -> {
                    for (TypeVariable<?> typeVariable : typeParameters) {
                        separator();
                        code(typeVariable.getName());
                    }
                });
            }
        }
        code(' ');
        scope(ScopeType.OBJECT, "", true, () -> {
            for (Property property : objectType.getProperties().values()) {
                separator();
                code('\n');
                document(property.getDocument());
                codeIf(!mutable, "readonly ")
                        .code(property.getName())
                        .codeIf(property.getType() instanceof NullableType, "?")
                        .code(": ");
                typeRef(NullableType.unwrap(property.getType()));
                code(';');
            }
        });
        code("\n");
        if (objectType instanceof StaticObjectType) {
            StaticObjectType staticObjectType = (StaticObjectType) objectType;
            String newPrefix = simpleName + ctx.nestedTypeSeparator();
            for (StaticObjectType nestedObjectType : staticObjectType.getNestedTypes()) {
                code("\n");
                writeObjectType(nestedObjectType, newPrefix);
            }
        }
    }

    private void writeEnumType() {
        EnumType enumType = (EnumType)type;
        code("export const ").code(getFile().getName()).code("_CONSTANTS = ");
        scope(ScopeType.LIST, ", ", enumType.getItems().size() > 3, () -> {
            for (String item : enumType.getItems()) {
                separator();
                code('\'').code(item).code('\'');
            }
        });
        code(" as const;\n");
        code("export type ")
                .code(getFile().getName())
                .code(" = typeof ")
                .code(getFile().getName())
                .code("_CONSTANTS[number];\n");
    }
}
