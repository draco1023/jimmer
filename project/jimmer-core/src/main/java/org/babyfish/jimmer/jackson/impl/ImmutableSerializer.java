package org.babyfish.jimmer.jackson.impl;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.jsontype.TypeSerializer;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.OffsetDateTimeSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.ZonedDateTimeSerializer;
import org.babyfish.jimmer.jackson.Converter;
import org.babyfish.jimmer.jackson.meta.BeanProps;
import org.babyfish.jimmer.jackson.meta.ConverterMetadata;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.runtime.ImmutableSpi;

import java.io.IOException;

public class ImmutableSerializer extends StdSerializer<ImmutableSpi> {

    private final ImmutableType immutableType;

    private final PropNameConverter propNameConverter;

    @SuppressWarnings("unchecked")
    public ImmutableSerializer(ImmutableType immutableType, PropNameConverter propNameConverter) {
        super((Class<ImmutableSpi>)immutableType.getJavaClass());
        this.immutableType = immutableType;
        this.propNameConverter = propNameConverter;
    }

    @Override
    public void serialize(
            ImmutableSpi value,
            JsonGenerator gen,
            SerializerProvider provider
    ) throws IOException {
        gen.writeStartObject();
        this.serializeFields(value, gen, provider);
        gen.writeEndObject();
    }

    @Override
    public void serializeWithType(
            ImmutableSpi value,
            JsonGenerator gen,
            SerializerProvider serializers,
            TypeSerializer typeSer
    ) throws IOException {
        typeSer.writeTypePrefix(gen, typeSer.typeId(value, JsonToken.START_OBJECT));
        this.serializeFields(value, gen, serializers);
        gen.writeEndObject();
    }

    @SuppressWarnings("unchecked")
    private void serializeFields(ImmutableSpi immutable, JsonGenerator gen, SerializerProvider provider) throws IOException {
        for (ImmutableProp prop : immutableType.getProps().values()) {
            JsonIgnore ignore = prop.getAnnotation(JsonIgnore.class);
            if (ignore != null && ignore.value()) {
                continue;
            }
            if (immutable.__isLoaded(prop.getId()) && immutable.__isVisible(prop.getId())) {
                Object value = immutable.__get(prop.getId());
                ConverterMetadata metadata = prop.getConverterMetadata();
                if (value != null && metadata != null) {
                    value = ((Converter<Object, Object>)metadata.getConverter()).output(value);
                }
                if (value == null) {
                    provider.defaultSerializeField(propNameConverter.fieldName(prop), null, gen);
                } else if (prop.isAssociation(TargetLevel.OBJECT) || prop.isScalarList()) {
                    gen.writeFieldName(propNameConverter.fieldName(prop));
                    TypeSerializer typeSer = null;
                    if (!prop.isReferenceList(TargetLevel.OBJECT) &&
                            value instanceof ImmutableSpi &&
                            ((ImmutableSpi)value).__type() != immutableType) {
                        typeSer = provider.findTypeSerializer(JacksonUtils.getJacksonType(prop));
                    }
                    if (typeSer != null) {
                        provider.findValueSerializer(value.getClass()).serializeWithType(value, gen, provider, typeSer);
                    } else {
                        provider.findValueSerializer(JacksonUtils.getJacksonType(prop)).serialize(value, gen, provider);
                    }
                } else {
                    gen.writeFieldName(propNameConverter.fieldName(prop));
                    JsonSerializer<?> serializer;
                    if (prop.getConverterMetadata() == null) {
                        serializer = provider.findTypedValueSerializer(
                                prop.getReturnClass(),
                                true,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    } else {
                        serializer = provider.findTypedValueSerializer(
                                JacksonUtils.getJacksonType(prop),
                                true,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    }
                    if (serializer instanceof DateSerializer) {
                        serializer = ((DateSerializer) serializer).createContextual(
                                provider,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    } else if (serializer instanceof LocalDateSerializer) {
                        serializer = ((LocalDateSerializer) serializer).createContextual(
                                provider,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    } else if (serializer instanceof LocalDateTimeSerializer) {
                        serializer = ((LocalDateTimeSerializer) serializer).createContextual(
                                provider,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    } else if (serializer instanceof OffsetDateTimeSerializer) {
                        serializer = ((OffsetDateTimeSerializer) serializer).createContextual(
                                provider,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    } else if (serializer instanceof ZonedDateTimeSerializer) {
                        serializer = ((ZonedDateTimeSerializer) serializer).createContextual(
                                provider,
                                BeanProps.get(provider.getTypeFactory(), prop)
                        );
                    }
                    ((JsonSerializer<Object>) serializer).serialize(value, gen, provider);
                }
            }
        }
    }
}
