import AssertType from "../assert/validatable";
import ThrowableType from "../assert/error/validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
var Validatable;
(function (Validatable) {
    Validatable.Parameter = ValidatableParameter;
    Validatable.Object = ValidatableObject;
})(Validatable || (Validatable = {}));
export function ValidatableParameter(value, error = ThrowableType.Parameter) {
    AssertType(value, error);
    return value;
}
export function ValidatableObject({ value, error }) {
    return ValidatableParameter(value, error);
}
export default Validatable;
//# sourceMappingURL=validatable.js.map