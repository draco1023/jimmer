package org.babyfish.jimmer.client.generator.ts;

import org.babyfish.jimmer.client.generator.CodeWriter;
import org.babyfish.jimmer.client.generator.File;
import org.babyfish.jimmer.client.generator.ts.simple.DynamicWriter;
import org.babyfish.jimmer.client.meta.*;

import java.io.IOException;
import java.io.Writer;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.*;
import java.util.*;
import java.util.regex.Pattern;

public abstract class TsCodeWriter extends CodeWriter<TsContext> {

    public static final Map<Class<?>, String> SIMPLE_TYPE_NAMES;

    private static final String[] EMPTY_ARR = new String[0];

    private static final Pattern SLASH_PATTERN = Pattern.compile("/");

    private final Map<String, Set<String>> importMap = new TreeMap<>();

    private final Map<String, Set<String>> importDataMap = new TreeMap<>();

    protected final boolean mutable;

    protected TsCodeWriter(TsContext ctx, File file, boolean mutable) {
        super(ctx, file);
        this.mutable = mutable;
    }

    @Override
    public void onImport(File file, boolean treatAsData, List<String> nestedNames) {
        String[] currentPaths =
                this.file.getDir().isEmpty() ?
                        EMPTY_ARR :
                        SLASH_PATTERN.split(this.file.getDir());
        String[] paths =
                file.getDir().isEmpty() ?
                        EMPTY_ARR :
                        SLASH_PATTERN.split(file.getDir());
        int sameCount = 0;
        int len = Math.min(currentPaths.length, paths.length);
        while (sameCount < len) {
            if (!currentPaths[sameCount].equals(paths[sameCount])) {
                break;
            }
            sameCount++;
        }
        StringBuilder builder = new StringBuilder();
        if (sameCount < currentPaths.length) {
            for (int i = currentPaths.length - sameCount; i > 0; --i) {
                builder.append("..");
                if (i != 1) {
                    builder.append('/');
                }
            }
        } else {
            builder.append(".");
        }
        if (sameCount == paths.length) {
            builder.append('/');
        }
        for (int i = sameCount; i < paths.length; i++) {
            builder.append('/').append(paths[i]);
        }
        String path = builder.toString();
        StringBuilder realName = new StringBuilder(file.getName());
        if (nestedNames != null) {
            String sp = ctx.nestedTypeSeparator();
            for (String nestedName : nestedNames) {
                realName.append(sp);
                realName.append(nestedName);
            }
        }
        (treatAsData ? importDataMap : importMap)
                .computeIfAbsent(path, it -> new TreeSet<>())
                .add(realName.toString());
    }

    @Override
    protected void writeImportHeader(Writer writer) throws IOException {
        applyImportMap(importMap, false, writer);
        applyImportMap(importDataMap, true, writer);
    }

    private static void applyImportMap(Map<String, Set<String>> importMap, boolean treatAsData, Writer writer) throws IOException {
        if (!importMap.isEmpty()) {
            for (Map.Entry<String, Set<String>> e : importMap.entrySet()) {
                writer.write(treatAsData ? "import { " : "import type { ");
                boolean addComma = false;
                for (String name : e.getValue()) {
                    if (addComma) {
                        writer.write(", ");
                    } else {
                        addComma = true;
                    }
                    writer.write(name);
                }
                writer.write(" } from '");
                writer.write(e.getKey());
                writer.write("';\n");
            }
            writer.write('\n');
        }
    }

    @Override
    protected void writeSimpleTypeRef(SimpleType simpleType) {
        String name = SIMPLE_TYPE_NAMES.get(simpleType.getJavaType());
        if (name == null) {
            name = "any";
        }
        code(name);
    }

    @Override
    protected void writeNullableTypeRef(NullableType nullableType) {
        typeRef(nullableType.getTargetType());
        code(" | undefined");
    }

    @Override
    protected void writeArrayTypeRef(ArrayType arrayType) {
        code(mutable ? "Array<" : "ReadonlyArray<");
        typeRef(arrayType.getElementType());
        code(">");
    }

    @Override
    protected void writeMapTypeRef(MapType mapType) {
        code(mutable ? "{" : "{readonly ");
        code("[key:string]: ");
        typeRef(mapType.getValueType());
        code("}");
    }

    @Override
    protected void writeDynamicTypeRef(ImmutableObjectType type) {
        importFile(DynamicWriter.FILE);
        code("Dynamic<").code(getContext().getFile(type).getName()).code('>');
    }

    @Override
    protected void writeDtoTypeRef(ImmutableObjectType type) {
        TsContext ctx = getContext();
        if (!ctx.isAnonymous() && type.getFetchByInfo() != null) {
            importFile(DtoWriter.dtoFile(ctx, type.getJavaType()));
            code(ctx.getDtoPrefix(type.getJavaType()))
                    .code("['")
                    .code(ctx.getDtoSuffix(type))
                    .code("']");
        } else if (!ctx.isAnonymous() && type.getCategory() == ImmutableObjectType.Category.VIEW) {
            importFile(DtoWriter.dtoFile(ctx, type.getJavaType()));
            code(ctx.getDtoPrefix(type.getJavaType()))
                    .code("['DEFAULT']");
        } else {
            scope(ScopeType.OBJECT, ", ", type.getProperties().size() > 1, () -> {
                for (Property property : type.getProperties().values()) {
                    separator();
                    if (property.getDocument() != null) {
                        code('\n');
                        document(property.getDocument());
                    }
                    codeIf(!mutable, "readonly ")
                            .code(property.getName())
                            .codeIf(property.getType() instanceof NullableType, "?")
                            .code(": ");
                    typeRef(NullableType.unwrap(property.getType()));
                }
            });
        }
    }

    static {
        Map<Class<?>, String> map = new HashMap<>();
        map.put(void.class, "void");
        map.put(boolean.class, "boolean");
        map.put(Boolean.class, "boolean");
        map.put(char.class, "number");
        map.put(Character.class, "number");
        map.put(byte.class, "number");
        map.put(Byte.class, "number");
        map.put(short.class, "number");
        map.put(Short.class, "number");
        map.put(int.class, "number");
        map.put(Integer.class, "number");
        map.put(long.class, "number");
        map.put(Long.class, "number");
        map.put(float.class, "number");
        map.put(Float.class, "number");
        map.put(double.class, "number");
        map.put(Double.class, "number");
        map.put(BigInteger.class, "number");
        map.put(BigDecimal.class, "number");
        map.put(String.class, "string");
        map.put(UUID.class, "string");
        map.put(Date.class, "string");
        map.put(java.sql.Date.class, "string");
        map.put(java.sql.Time.class, "string");
        map.put(java.sql.Timestamp.class, "string");
        map.put(LocalDate.class, "string");
        map.put(LocalTime.class, "string");
        map.put(LocalDateTime.class, "string");
        map.put(OffsetDateTime.class, "string");
        map.put(ZonedDateTime.class, "string");
        SIMPLE_TYPE_NAMES = map;
    }
}
