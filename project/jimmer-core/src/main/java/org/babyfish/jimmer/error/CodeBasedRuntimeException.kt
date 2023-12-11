package org.babyfish.jimmer.error

abstract class CodeBasedRuntimeException protected constructor(
    message: String,
    cause: Throwable?
) : RuntimeException(message, cause) {

    abstract val code: Enum<*>

    abstract val fields: Map<String, Any?>

    companion object {

        @JvmStatic
        fun familyName(name: String): String {
            var prevLower = false
            val size = name.length
            val builder = StringBuilder()
            for (i in 0 until size) {
                val c = name[i]
                if (Character.isUpperCase(c)) {
                    if (prevLower) {
                        builder.append("_")
                    }
                    prevLower = false
                    builder.append(c)
                } else {
                    prevLower = true
                    builder.append(c.uppercaseChar())
                }
            }
            return builder.toString()
        }
    }
}
