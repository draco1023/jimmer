package org.babyfish.jimmer.apt.dto;

import com.squareup.javapoet.ClassName;
import org.babyfish.jimmer.apt.meta.ImmutableProp;
import org.babyfish.jimmer.apt.meta.ImmutableType;
import org.babyfish.jimmer.dto.compiler.DtoCompiler;
import org.babyfish.jimmer.dto.compiler.DtoFile;
import org.babyfish.jimmer.sql.GeneratedValue;

import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.DeclaredType;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class AptDtoCompiler extends DtoCompiler<ImmutableType, ImmutableProp> {

    private static final ClassName STRING = ClassName.get(String.class);

    public AptDtoCompiler(DtoFile dtoFile) throws IOException {
        super(dtoFile);
    }

    @Override
    protected Collection<ImmutableType> getSuperTypes(ImmutableType baseType) {
        return baseType.getSuperTypes();
    }

    @Override
    protected Map<String, ImmutableProp> getDeclaredProps(ImmutableType baseType) {
        return baseType.getDeclaredProps();
    }

    @Override
    protected Map<String, ImmutableProp> getProps(ImmutableType baseType) {
        return baseType.getProps();
    }

    @Override
    protected ImmutableType getTargetType(ImmutableProp baseProp) {
        return baseProp.getTargetType();
    }

    @Override
    protected boolean isGeneratedValue(ImmutableProp baseProp) {
        return baseProp.toElement().getAnnotation(GeneratedValue.class) != null;
    }

    @Override
    protected boolean isStringProp(ImmutableProp baseProp) {
        return baseProp.getTypeName().equals(STRING);
    }

    @Override
    protected boolean isSameType(ImmutableProp baseProp1, ImmutableProp baseProp2) {
        return baseProp1.getTypeName().equals(baseProp2.getTypeName());
    }

    @Override
    protected List<String> getEnumConstants(ImmutableProp baseProp) {
        if (baseProp.isList() || !baseProp.context().isEnum(baseProp.getElementType())) {
            return null;
        }
        Element element = ((DeclaredType)baseProp.toElement().getReturnType()).asElement();
        if (!(element instanceof TypeElement)) {
            return null;
        }
        List<String> constants = new ArrayList<>();
        for (Element childElement : element.getEnclosedElements()) {
            if (childElement.getKind() == ElementKind.ENUM_CONSTANT) {
                constants.add(childElement.getSimpleName().toString());
            }
        }
        return constants;
    }
}
