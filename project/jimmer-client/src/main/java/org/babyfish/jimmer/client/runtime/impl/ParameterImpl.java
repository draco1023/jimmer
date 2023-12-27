package org.babyfish.jimmer.client.runtime.impl;

import org.babyfish.jimmer.client.runtime.Parameter;
import org.babyfish.jimmer.client.runtime.Type;

public class ParameterImpl implements Parameter {

    private final String name;

    private Type type;

    private String requestHeader;

    private String requestParam;

    private String pathVariable;

    private boolean requestBody;

    private String defaultValue;

    public ParameterImpl(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public Type getType() {
        return type;
    }

    void setType(Type type) {
        this.type = type;
    }

    @Override
    public String getRequestHeader() {
        return requestHeader;
    }

    void setRequestHeader(String requestHeader) {
        this.requestHeader = requestHeader;
    }

    @Override
    public String getRequestParam() {
        return requestParam;
    }

    void setRequestParam(String requestParam) {
        this.requestParam = requestParam;
    }

    @Override
    public String getPathVariable() {
        return pathVariable;
    }

    void setPathVariable(String pathVariable) {
        this.pathVariable = pathVariable;
    }

    @Override
    public boolean isRequestBody() {
        return requestBody;
    }

    void setRequestBody(boolean requestBody) {
        this.requestBody = requestBody;
    }

    @Override
    public String getDefaultValue() {
        return defaultValue;
    }

    void setDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
    }
}
