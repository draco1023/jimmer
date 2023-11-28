package org.babyfish.jimmer.apt.error;

import com.squareup.javapoet.*;
import org.babyfish.jimmer.apt.GeneratorException;
import org.babyfish.jimmer.apt.MetaException;
import org.babyfish.jimmer.apt.immutable.generator.Constants;
import org.babyfish.jimmer.error.CodeBasedException;
import org.babyfish.jimmer.error.ErrorFamily;
import org.babyfish.jimmer.error.ErrorField;
import org.babyfish.jimmer.error.ErrorFields;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.annotation.processing.Filer;
import javax.lang.model.element.*;
import java.io.IOException;
import java.util.*;
import java.util.regex.Pattern;

public class ErrorGenerator {

    private static final Pattern DOT_PATTERN = Pattern.compile("\\.");

    private static final String ERROR_FIELDS_NAME = ErrorFields.class.getName();

    private static final String ERROR_FIELD_NAME = ErrorField.class.getName();

    private static final String[] EMPTY_STR_ARR = new String[0];

    private static final Map<String, TypeName> PRIMITIVE_TYPE_MAP;

    private final TypeElement typeElement;

    private final Filer filer;

    private final String packageName;

    private final ClassName className;

    private final String exceptionName;

    private final ClassName exceptionClassName;

    private TypeSpec.Builder typeBuilder;

    public ErrorGenerator(TypeElement typeElement, Filer filer) {
        this.typeElement = typeElement;
        this.filer = filer;
        this.packageName = packageName();
        String[] simpleNames = simpleNames();
        this.className = ClassName.get(
                packageName,
                simpleNames[0],
                Arrays.copyOfRange(simpleNames, 1, simpleNames.length)
        );
        String exceptionName = String.join("_", simpleNames);
        if (exceptionName.endsWith("_ErrorCode")) {
            exceptionName = exceptionName.substring(0, exceptionName.length() - 10) + "Exception";
        } else if (exceptionName.endsWith("ErrorCode")) {
            exceptionName = exceptionName.substring(0, exceptionName.length() - 9) + "Exception";
        } else if (exceptionName.endsWith("_Error")) {
            exceptionName = exceptionName.substring(0, exceptionName.length() - 6) + "Exception";
        } else if (exceptionName.endsWith("Error")) {
            exceptionName = exceptionName.substring(0, exceptionName.length() - 5) + "Exception";
        } else {
            exceptionName = exceptionName + "Exception";
        }
        this.exceptionName = exceptionName;
        this.exceptionClassName = ClassName.get(packageName, exceptionName);
    }

    public void generate() {
        typeBuilder = TypeSpec
                .classBuilder(exceptionName)
                .addModifiers(Modifier.PUBLIC, Modifier.ABSTRACT)
                .superclass(CodeBasedException.class)
                .addAnnotation(
                        AnnotationSpec
                                .builder(Constants.GENERATED_BY_CLASS_NAME)
                                .addMember("type", "$T.class", className)
                                .build()
                );
        addMembers();
        try {
            JavaFile
                    .builder(
                            packageName,
                            typeBuilder.build()
                    )
                    .indent("    ")
                    .build()
                    .writeTo(filer);
        } catch (IOException ex) {
            throw new GeneratorException(
                    String.format(
                            "Cannot generate code based exception for enum type '%s'",
                            typeElement.getQualifiedName().toString()
                    ),
                    ex
            );
        }
    }

    private String packageName() {
        for (Element element = typeElement.getEnclosingElement();
             element != null;
             element = element.getEnclosingElement()) {
            if (element instanceof PackageElement) {
                return ((PackageElement) element).getQualifiedName().toString();
            }
        }
        return "";
    }

    private String[] simpleNames() {
        String qualifiedName = typeElement.getQualifiedName().toString();
        if (packageName.isEmpty()) {
            return DOT_PATTERN.split(qualifiedName);
        }
        return DOT_PATTERN.split(qualifiedName.substring(packageName.length() + 1));
    }

    private void addMembers() {

        addConstructor();

        typeBuilder.addMethod(
                MethodSpec
                        .methodBuilder("getCode")
                        .addModifiers(Modifier.PUBLIC, Modifier.ABSTRACT)
                        .addAnnotation(Override.class)
                        .returns(className)
                        .build()
        );

        for (Element element : typeElement.getEnclosedElements()) {
            if (element.getKind() == ElementKind.ENUM_CONSTANT) {
                addCreator(element, false);
                addCreator(element, true);
            }
        }

        for (Element element : typeElement.getEnclosedElements()) {
            if (element.getKind() == ElementKind.ENUM_CONSTANT) {
                addType(element);
            }
        }
    }

    private void addConstructor() {
        typeBuilder.addMethod(
                MethodSpec
                        .constructorBuilder()
                        .addModifiers(Modifier.PRIVATE)
                        .addParameter(String.class, "message")
                        .addParameter(Throwable.class, "cause")
                        .addStatement("super(message, cause)")
                        .build()
        );
    }

    @SuppressWarnings("unchecked")
    private void addCreator(Element element, boolean withCause) {

        MethodSpec.Builder builder = MethodSpec
                .methodBuilder(javaName(element, false))
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
                .returns(exceptionClassName)
                .addParameter(
                        ParameterSpec
                                .builder(Constants.STRING_CLASS_NAME, "message")
                                .addAnnotation(NotNull.class)
                                .build()
                );
        if (withCause) {
            builder.addParameter(
                    ParameterSpec
                            .builder(Throwable.class, "cause")
                            .addAnnotation(Nullable.class)
                            .build()
            );
        }

        List<Field> fields = fieldsOf(element);

        for (Field field : fields) {
            builder.addParameter(
                    ParameterSpec
                            .builder(field.type, field.name)
                            .addAnnotation(field.isNullable ? Nullable.class : NotNull.class)
                            .build()
            );
        }
        builder.addCode("return new $L(\n$>", javaName(element, true));
        builder.addCode("message,\n").addCode(withCause ? "cause" : "null");
        for (Field field : fields) {
            builder.addCode(",\n$L", field.name);
        }
        builder.addCode("\n$<);\n");

        typeBuilder.addMethod(builder.build());
    }

    private void addType(Element element) {
        TypeSpec.Builder builder = TypeSpec
                .classBuilder(javaName(element, true))
                .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
                .superclass(exceptionClassName);

        List<Field> fields = fieldsOf(element);
        for (Field field : fields) {
            FieldSpec.Builder fieldBuilder = FieldSpec
                    .builder(field.type, field.name)
                    .addModifiers(Modifier.PRIVATE, Modifier.FINAL)
                    .addAnnotation(field.isNullable ? Nullable.class : NotNull.class);
            builder.addField(fieldBuilder.build());
        }

        MethodSpec.Builder initBuilder = MethodSpec
                .constructorBuilder()
                .addModifiers(Modifier.PUBLIC)
                .addParameter(Constants.STRING_CLASS_NAME, "message")
                .addParameter(Constants.THROWABLE_CLASS_NAME, "cause");
        for (Field field : fields) {
            ParameterSpec.Builder parameterBuilder =
                    ParameterSpec
                            .builder(field.type, field.name)
                            .addAnnotation(field.isNullable ? Nullable.class : NotNull.class);
            initBuilder.addParameter(parameterBuilder.build());
        }
        initBuilder.addStatement("super(message, cause)");
        for (Field field : fields) {
            initBuilder.addStatement("this.$L = $L", field.name, field.name);
        }
        builder.addMethod(initBuilder.build());

        builder.addMethod(
                MethodSpec
                        .methodBuilder("getCode")
                        .addModifiers(Modifier.PUBLIC)
                        .addAnnotation(Override.class)
                        .returns(className)
                        .addStatement("return $T.$L", className, element.getSimpleName().toString())
                        .build()
        );

        MethodSpec.Builder getFieldsBuilder = MethodSpec
                .methodBuilder("getFields")
                .addModifiers(Modifier.PUBLIC)
                .addAnnotation(Override.class)
                .returns(
                        ParameterizedTypeName.get(
                                Constants.MAP_CLASS_NAME,
                                Constants.STRING_CLASS_NAME,
                                TypeName.OBJECT
                        )
                );
        if (fields.isEmpty()) {
            getFieldsBuilder.addStatement("return $T.emptyMap()", Constants.COLLECTIONS_CLASS_NAME);
        } else if (fields.size() == 1) {
            getFieldsBuilder.addStatement(
                    "return $T.singletonMap($S, $L)",
                    Constants.COLLECTIONS_CLASS_NAME,
                    fields.get(0).name,
                    fields.get(0).name
            );
        } else {
            getFieldsBuilder.addStatement(
                    "$T __fields = new $T<>()",
                    Constants.MAP_CLASS_NAME,
                    Constants.LINKED_HASH_MAP_CLASS_NAME
            );
            for (Field field : fields) {
                getFieldsBuilder.addStatement("__fields.put($S, $L)", field.name, field.name);
            }
            getFieldsBuilder.addStatement("return __fields");
        }
        builder.addMethod(getFieldsBuilder.build());

        for (Field field : fields) {
            builder.addMethod(
                    MethodSpec
                            .methodBuilder(
                                    (field.type.equals(TypeName.BOOLEAN) ? "is" : "get") +
                                            Character.toUpperCase(field.name.charAt(0)) +
                                            field.name.substring(1)
                            )
                            .addModifiers(Modifier.PUBLIC)
                            .returns(field.type)
                            .addAnnotation(field.isNullable ? Nullable.class : NotNull.class)
                            .addStatement("return $L", field.name)
                            .build()
            );
        }

        typeBuilder.addType(builder.build());
    }

    private static String javaName(Element element, boolean upperHead) {
        String simpleName = element.getSimpleName().toString();
        int size = simpleName.length();
        boolean toUpper = upperHead;
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < size; i++) {
            char c = simpleName.charAt(i);
            if (c == '_') {
                toUpper = true;
            } else {
                if (toUpper) {
                    builder.append(Character.toUpperCase(c));
                } else {
                    builder.append(Character.toLowerCase(c));
                }
                toUpper = false;
            }
        }
        return builder.toString();
    }

    @SuppressWarnings("unchecked")
    private static List<Field> fieldsOf(Element element) {
        List<Field> fields = new ArrayList<>();
        for (AnnotationMirror annotationMirror : element.getAnnotationMirrors()) {
            String qualifiedName = ((TypeElement) annotationMirror.getAnnotationType().asElement())
                    .getQualifiedName()
                    .toString();
            if (qualifiedName.equals(ERROR_FIELDS_NAME)) {
                Iterator<? extends AnnotationValue> itr = annotationMirror.getElementValues().values().iterator();
                if (itr.hasNext()) {
                    AnnotationValue annotationValue = itr.next();
                    for (AnnotationMirror childMirror : (List<AnnotationMirror>)annotationValue.getValue()) {
                        fields.add(Field.of(childMirror, element));
                    }
                }
                break;
            } else if (qualifiedName.equals(ERROR_FIELD_NAME)) {
                fields = Collections.singletonList(Field.of(annotationMirror, element));
                break;
            }
        }
        return fields;
    }

    private static class Field {

        final String name;

        final TypeName type;

        final boolean isNullable;

        final boolean isList;

        private Field(String name, TypeName type, boolean isNullable, boolean isList) {
            this.name = name;
            this.type = type;
            this.isNullable = isNullable;
            this.isList = isList;
        }

        public static Field of(AnnotationMirror annotationMirror, Element constantElement) {
            String name = null;
            TypeName typeName = null;
            boolean isNullable = false;
            boolean isList = false;
            for (Map.Entry<? extends ExecutableElement, ? extends AnnotationValue> e :
                    annotationMirror.getElementValues().entrySet()) {
                String key = e.getKey().getSimpleName().toString();
                Object value = e.getValue().getValue();
                if (key.equals("name")) {
                    String str = (String)value;
                    if (str.equals("family") || str.equals("code")) {
                        throw new MetaException(
                                constantElement,
                                "The enum constant \"" +
                                        constantElement.getEnclosingElement().getSimpleName().toString() +
                                        '.' +
                                        constantElement.getSimpleName().toString() +
                                        "\" is illegal, it cannot be decorated by \"@" +
                                        ErrorFamily.class.getName() +
                                        "\" with the name \"family\" or \"code\""
                        );
                    }
                    name = str;
                } else if (key.equals("type")) {
                    typeName = typeName(value.toString());
                } else if (key.equals("nullable")) {
                    isNullable = (boolean) value;
                } else if (key.equals("list")){
                    isList = (boolean) value;
                }
            }
            assert typeName != null;
            if (isList) {
                if (typeName.isPrimitive()) {
                    throw new MetaException(
                            constantElement,
                            "The enum constant \"" +
                                    constantElement.getEnclosingElement().getSimpleName().toString() +
                                    '.' +
                                    constantElement.getSimpleName().toString() +
                                    "\" is decorated by @" +
                                    ErrorField.class.getName() +
                                    ", this annotation is illegal because its `type` is primitive but " +
                                    "its `list` is true"
                    );
                }
                typeName = ParameterizedTypeName.get(
                        Constants.LIST_CLASS_NAME,
                        typeName
                );
            }
            return new Field(name, typeName, isNullable, isList);
        }
    }

    private static TypeName typeName(String value) {
        TypeName primitiveTypeName = PRIMITIVE_TYPE_MAP.get(value);
        if (primitiveTypeName != null) {
            return primitiveTypeName;
        }
        StringBuilder packageBuilder = new StringBuilder();
        String simpleName = null;
        List<String> nestNames = new ArrayList<>();
        for (String part : DOT_PATTERN.split(value)) {
            if (Character.isUpperCase(part.charAt(0))) {
                if (simpleName == null) {
                    simpleName = part;
                } else {
                    nestNames.add(part);
                }
            } else {
                packageBuilder.append(part).append('.');
            }
        }
        return ClassName.get(
                packageBuilder.length() == 0 ?
                        "" :
                        packageBuilder.substring(0, packageBuilder.length() - 1),
                simpleName,
                nestNames.toArray(EMPTY_STR_ARR)
        );
    }

    static {
        Map<String, TypeName> map = new HashMap<>();
        map.put("boolean", TypeName.BOOLEAN);
        map.put("char", TypeName.CHAR);
        map.put("byte", TypeName.BYTE);
        map.put("short", TypeName.SHORT);
        map.put("int", TypeName.INT);
        map.put("long", TypeName.LONG);
        map.put("float", TypeName.FLOAT);
        map.put("double", TypeName.DOUBLE);
        PRIMITIVE_TYPE_MAP = map;
    }
}
