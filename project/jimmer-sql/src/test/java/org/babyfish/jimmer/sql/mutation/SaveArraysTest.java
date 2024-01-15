package org.babyfish.jimmer.sql.mutation;

import org.babyfish.jimmer.sql.ast.mutation.AffectedTable;
import org.babyfish.jimmer.sql.ast.mutation.SaveMode;
import org.babyfish.jimmer.sql.common.AbstractMutationTest;
import org.babyfish.jimmer.sql.model.arrays.ArrayModelDraft;
import org.babyfish.jimmer.sql.model.arrays.ArrayModel;
import org.junit.jupiter.api.Test;

import java.util.UUID;

public class SaveArraysTest extends AbstractMutationTest {

  @Test
  public void testInsert() {
    UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
    executeAndExpectResult(
        getSqlClient().getEntities().saveCommand(
            ArrayModelDraft.$.produce(model -> {
              model.setId(newId);
              model.setStrings(new String[]{"1", "2", "3"});
              model.setBytes(new Byte[]{1, 2, 3});
              model.setInts(new int[] {4, 5, 6});
              model.setIntegers(new Integer[]{1, 2, 3});
              model.setLongs(new Long[]{1L, 2L, 3L});
              model.setFloats(new Float[]{1f, 2f, 3f});
              model.setUuids(new UUID[]{newId});
            })
        ).configure(cfg -> cfg.setMode(SaveMode.INSERT_ONLY)),
        ctx -> {
          ctx.statement(it -> {
            it.sql(
                    "insert into ARRAY_MODEL(ID, STRINGS, BYTES, INTS, INTEGERS, LONGS, UUIDS, FLOATS) " +
                    "values(?, ?, ?, ?, ?, ?, ?, ?)"
            );
            it.variables(
                newId,
                new String[]{"1", "2", "3"},
                new Byte[]{1, 2, 3},
                new Integer[]{4, 5, 6},
                new Integer[]{1, 2, 3},
                new Long[]{1L, 2L, 3L},
                new UUID[]{newId},
                new Float[]{1f, 2f, 3f}
            );
          });
          ctx.entity(it -> {
            it.original(
                    "{" +
                            "--->\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                            "--->\"strings\":[\"1\",\"2\",\"3\"]," +
                            "--->\"bytes\":[1,2,3]," +
                            "\"ints\":[4,5,6]," +
                            "--->\"integers\":[1,2,3]," +
                            "--->\"longs\":[1,2,3]," +
                            "--->\"uuids\":[\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"]," +
                            "--->\"floats\":[1.0,2.0,3.0]}"
            );
            it.modified(
                    "{" +
                            "\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                            "\"strings\":[\"1\",\"2\",\"3\"]," +
                            "\"bytes\":[1,2,3]," +
                            "\"ints\":[4,5,6]," +
                            "\"integers\":[1,2,3]," +
                            "\"longs\":[1,2,3]," +
                            "\"uuids\":[\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"]," +
                            "\"floats\":[1.0,2.0,3.0]}"
            );
          });
          ctx.totalRowCount(1);
          ctx.rowCount(AffectedTable.of(ArrayModel.class), 1);
        }
    );
  }
}
