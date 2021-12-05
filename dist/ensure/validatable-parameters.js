import AssertType from "../assert/validatable";
import ThrowableType from "../assert/error/validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function ValidatableParameters(value, error = ThrowableType.Parameter) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=validatable-parameters.js.map