package org.babyfish.jimmer.client.runtime.impl;

import org.babyfish.jimmer.client.meta.TypeName;
import org.babyfish.jimmer.client.runtime.TypeVariable;

import java.util.Set;

public class TypeVariableImpl extends Graph implements TypeVariable {

    private final TypeName typeName;

    public TypeVariableImpl(TypeName typeName) {
        this.typeName = typeName;
    }

    @Override
    public TypeName getTypeName() {
        return typeName;
    }

    @Override
    protected String toStringImpl(Set<Graph> stack) {
        return typeName.toString();
    }
}
