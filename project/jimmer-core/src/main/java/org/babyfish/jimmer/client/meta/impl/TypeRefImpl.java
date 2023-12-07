package org.babyfish.jimmer.client.meta.impl;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.babyfish.jimmer.client.meta.TypeName;
import org.babyfish.jimmer.client.meta.TypeRef;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@JsonSerialize(using = TypeRefImpl.Serializer.class)
@JsonDeserialize(using = TypeRefImpl.Deserializer.class)
public class TypeRefImpl<S> extends AstNode<S> implements TypeRef {

    private TypeName typeName;

    private boolean nullable;

    private List<TypeRefImpl<S>> arguments = new ArrayList<>();

    private String fetchBy;

    private TypeName fetchOwner;

    public TypeRefImpl() {
        super(null);
    }

    @Override
    public TypeName getTypeName() {
        return typeName;
    }

    public void setTypeName(TypeName typeName) {
        this.typeName = typeName;
    }

    @Override
    public boolean isNullable() {
        return nullable;
    }

    public void setNullable(boolean nullable) {
        this.nullable = nullable;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<TypeRef> getArguments() {
        return (List<TypeRef>) (List<?>)arguments;
    }

    public void addArgument(TypeRefImpl<S> argument) {
        this.arguments.add(argument);
    }

    @Nullable
    @Override
    public String getFetchBy() {
        return fetchBy;
    }

    public void setFetchBy(String fetchBy) {
        this.fetchBy = fetchBy;
    }

    @Nullable
    @Override
    public TypeName getFetcherOwner() {
        return fetchOwner;
    }

    public void setFetcherOwner(TypeName fetchOwner) {
        this.fetchOwner = fetchOwner;
    }

    @Override
    public void accept(AstNodeVisitor<S> visitor) {
        visitor.visitAstNode(this);
        try {
            if (arguments != null) {
                for (TypeRefImpl<S> argument : arguments) {
                    argument.accept(visitor);
                }
            }
        } finally {
            visitor.visitedAstNode(this);
        }
    }

    @Override
    public String toString() {
        return "TypeRefImpl{" +
                "typeName='" + typeName + '\'' +
                ", nullable=" + nullable +
                ", arguments=" + arguments +
                ", fetchBy='" + fetchBy + '\'' +
                ", fetchOwner='" + fetchOwner + '\'' +
                '}';
    }

    public static class Serializer extends JsonSerializer<TypeRefImpl<?>> {

        @Override
        public void serialize(TypeRefImpl<?> typeRef, JsonGenerator gen, SerializerProvider provider) throws IOException {
            gen.writeStartObject();
            provider.defaultSerializeField("typeName", typeRef.getTypeName(), gen);
            if (typeRef.isNullable()) {
                gen.writeFieldName("nullable");
                gen.writeBoolean(true);
            }
            if (!typeRef.getArguments().isEmpty()) {
                provider.defaultSerializeField("arguments", typeRef.getArguments(), gen);
            }
            if (typeRef.getFetchBy() != null) {
                gen.writeFieldName("fetchBy");
                gen.writeString(typeRef.getFetchBy());
                gen.writeFieldName("fetcherOwner");
                gen.writeString(typeRef.getFetcherOwner().toString(true));
            }
            gen.writeEndObject();
        }
    }

    public static class Deserializer extends JsonDeserializer<TypeRefImpl<?>> {

        @SuppressWarnings("unchecked")
        @Override
        public TypeRefImpl<?> deserialize(JsonParser jp, DeserializationContext ctx) throws IOException, JacksonException {
            JsonNode jsonNode = jp.getCodec().readTree(jp);
            TypeRefImpl<Object> typeRef = new TypeRefImpl<>();
            typeRef.setTypeName(ctx.readTreeAsValue(jsonNode.get("typeName"), TypeName.class));
            if (jsonNode.has("nullable")) {
                typeRef.setNullable(jsonNode.get("nullable").asBoolean());
            }
            if (jsonNode.has("arguments")) {
                for (JsonNode argNode : jsonNode.get("arguments")) {
                    TypeRefImpl<Object> arg = (TypeRefImpl<Object>) ctx.readTreeAsValue(argNode, TypeRefImpl.class);
                    typeRef.addArgument(arg);
                }
            }
            if (jsonNode.has("fetchBy")) {
                typeRef.setFetchBy(jsonNode.get("fetchBy").asText());
                typeRef.setFetcherOwner(TypeName.parse(jsonNode.get("fetcherOwner").asText()));
            }
            return typeRef;
        }
    }
}
