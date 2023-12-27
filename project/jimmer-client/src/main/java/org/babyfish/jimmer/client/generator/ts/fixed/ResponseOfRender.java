package org.babyfish.jimmer.client.generator.ts.fixed;

import org.babyfish.jimmer.client.generator.SourceWriter;
import org.babyfish.jimmer.client.generator.Render;

public class ResponseOfRender implements Render {

    private static final String CODE =
            "export type ResponseOf<TFuncType> = \n" +
                    "    TFuncType extends (options: any) => Promise<infer TResponse> ? TResponse : never\n" +
                    ";\n";

    @Override
    public void export(SourceWriter writer) {
        writer.code("export type {ResponseOf} from './ResponseOf';\n");
    }

    @Override
    public void render(SourceWriter writer) {
        writer.code(CODE);
    }
}
