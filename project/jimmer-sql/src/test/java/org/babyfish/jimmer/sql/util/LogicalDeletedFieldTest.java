package org.babyfish.jimmer.sql.util;

import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.LogicalDeletedInfo;
import org.babyfish.jimmer.sql.model.logic.A;
import org.babyfish.jimmer.sql.model.logic.B;
import org.babyfish.jimmer.sql.model.logic.C;
import org.babyfish.jimmer.sql.model.logic.D;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

public class LogicalDeletedFieldTest {

    @Test
    public void testA() {
        LogicalDeletedInfo info = ImmutableType.get(A.class).getLogicalDeletedInfo();
        assert info != null;
        Assertions.assertEquals(1, info.generateValue());
    }

    @Test
    public void testB() {
        LogicalDeletedInfo info = ImmutableType.get(B.class).getLogicalDeletedInfo();
        assert info != null;
        Assertions.assertEquals(B.Status.DISABLED, info.generateValue());
    }

    @Test
    public void testC() {
        LogicalDeletedInfo info = ImmutableType.get(C.class).getLogicalDeletedInfo();
        assert info != null;
        Assertions.assertTrue(
                Math.abs(
                        ((LocalDateTime)info.generateValue()).toEpochSecond(ZoneOffset.UTC) -
                        LocalDateTime.now().toEpochSecond(ZoneOffset.UTC)
                ) < 1000
        );
    }

    @Test
    public void testD() {
        LogicalDeletedInfo info = ImmutableType.get(D.class).getLogicalDeletedInfo();
        assert info != null;
        Assertions.assertNull(info.generateValue());
    }
}
