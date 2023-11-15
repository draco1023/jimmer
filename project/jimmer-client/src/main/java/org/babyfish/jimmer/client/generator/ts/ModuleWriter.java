package org.babyfish.jimmer.client.generator.ts;

import org.babyfish.jimmer.client.generator.File;
import org.babyfish.jimmer.client.generator.ts.simple.ExecutorWriter;

public class ModuleWriter extends TsCodeWriter {

    public ModuleWriter(TsContext ctx) {
        super(ctx, ctx.getModuleFile(), false);
    }

    @Override
    protected void write() {

        importFile(ExecutorWriter.FILE);

        code("export class ").code(getFile().getName()).code(' ');
        scope(ScopeType.OBJECT, "", true, () -> {
            for (File file : getContext().getServiceFileMap().values()) {
                importFile(file, true);
                code("\nreadonly ").code(toFieldName(file.getName())).code(": ").code(file.getName()).code(";\n");
            }
            code("\nconstructor(executor: Executor) ");
            scope(ScopeType.OBJECT, "", true, () -> {
                for (File file : getContext().getServiceFileMap().values()) {
                    code("this.").code(toFieldName(file.getName()))
                            .code(" = new ").code(file.getName()).code("(executor);\n");
                }
            });
        });
    }

    private static String toFieldName(String serviceName) {
        char[] chs = serviceName.toCharArray();
        for (int i = 0; i < chs.length; i++) {
            if (Character.isUpperCase(chs[i])) {
                chs[i] = Character.toLowerCase(chs[i]);
            } else {
                break;
            }
        }
        return new String(chs);
    }
}
