package org.babyfish.jimmer.client.generator.openapi;

import org.babyfish.jimmer.client.generator.CodeWriter;

import java.io.Writer;

public class YmlWriter extends CodeWriter<YmlWriter> {

    public YmlWriter(Writer writer) {
        super("  ");
        setWriter(writer);
    }

    public YmlWriter object(String name, Runnable block) {
        code(name).code(':');
        return scope(ScopeType.BLANK, "", true, block);
    }

    public YmlWriter list(String name, Runnable block) {
        code(name).code(':');
        scope(ScopeType.BLANK, "", true, block);
        return this;
    }

    public YmlWriter listItem(Runnable block) {
        code("- ");
        scope(ScopeType.BLANK, "", false, block);
        return this;
    }

    public YmlWriter prop(String name, String value) {
        if (value != null && !value.isEmpty()) {
            code(name).code(": ").code(value.replace("\n", "\\n")).code('\n');
        }
        return this;
    }

    public YmlWriter description(Description description) {
        if (description.getSummary() != null) {
            prop("summary", description.getSummary());
        }
        if (!description.getDescriptionLines().isEmpty()) {
            code("description: ");
            if (description.getDescriptionLines().size() == 1) {
                code(description.getDescriptionLines().get(0)).code('\n');
            } else {
                code("|+");
                scope(ScopeType.BLANK, "", true, () -> {
                    for (String line : description.getDescriptionLines()) {
                        code(line).code('\n');
                    }
                });
            }
        }
        return this;
    }
}
