package org.babyfish.jimmer.sql.runtime;

import org.babyfish.jimmer.error.ErrorFamily;
import org.babyfish.jimmer.error.ErrorField;

@ErrorFamily
@ErrorField(name = "exportedPath", type = ExportedSavePath.class)
public enum SaveErrorCode {

    NULL_TARGET,

    ILLEGAL_TARGET_ID,

    CANNOT_DISSOCIATE_TARGETS,

    NO_ID_GENERATOR,

    ILLEGAL_ID_GENERATOR,

    ILLEGAL_GENERATED_ID,

    EMPTY_OBJECT,

    NO_KEY_PROPS,

    NO_NON_ID_PROPS,

    NO_VERSION,

    OPTIMISTIC_LOCK_ERROR,

    KEY_NOT_UNIQUE,

    NEITHER_ID_NOR_KEY,

    REVERSED_REMOTE_ASSOCIATION,

    LONG_REMOTE_ASSOCIATION,

    FAILED_REMOTE_VALIDATION,

    UNSTRUCTURED_ASSOCIATION;

    /**
     * Will be removed in `1.0.0`
     */
    @Deprecated
    public static final SaveErrorCode ILLEGAL_VERSION = OPTIMISTIC_LOCK_ERROR;
}
