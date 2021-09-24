import TypeBoolean from "@dikac/t-boolean/boolean";
/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable(value) {
    return TypeBoolean(value.valid);
}
//# sourceMappingURL=validatable.js.map