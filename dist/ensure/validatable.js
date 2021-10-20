import AssertType from "../assert/validatable";
import ThrowableType from "../assert/error/validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable({ value, error = ThrowableType, }) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=validatable.js.map