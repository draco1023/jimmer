package org.babyfish.jimmer.client.common;

import org.babyfish.jimmer.client.runtime.Metadata;
import org.jetbrains.annotations.Nullable;

import java.lang.reflect.Parameter;

public class ParameterParserImpl implements Metadata.ParameterParser {

    @Nullable
    @Override
    public String requestHeader(Parameter javaParameter) {
        RequestHeader requestHeader = javaParameter.getAnnotation(RequestHeader.class);
        return requestHeader != null ? requestHeader.value() : null;
    }

    @Nullable
    @Override
    public String requestParam(Parameter javaParameter) {
        RequestParam requestParam = javaParameter.getAnnotation(RequestParam.class);
        return requestParam != null ? requestParam.value() : null;
    }

    @Override
    public String defaultValue(Parameter javaParameter) {
        RequestParam requestParam = javaParameter.getAnnotation(RequestParam.class);
        if (requestParam == null || requestParam.defaultVale().isEmpty()) {
            return null;
        }
        return requestParam.defaultVale();
    }

    @Nullable
    @Override
    public String pathVariable(Parameter javaParameter) {
        PathVariable pathVariable = javaParameter.getAnnotation(PathVariable.class);
        return pathVariable != null ? pathVariable.value() : null;
    }

    @Override
    public boolean isOptional(Parameter javaParameter) {
        RequestParam requestParam = javaParameter.getAnnotation(RequestParam.class);
        if (requestParam != null) {
            return !requestParam.required();
        }
        return false;
    }

    @Override
    public boolean isRequestBody(Parameter javaParameter) {
        return javaParameter.getAnnotation(RequestBody.class) != null;
    }
}
