import ValidatableType from "../boolean/validatable";
import ThrowableType from "./error/validatable";
import Callback from "@dikac/t-function/assert/callback";
/**
 * Throw exception if given value is not {@link Validatable} type
 */
export default function Validatable(value, errorFactory = ThrowableType.Parameter) {
    Callback(value, ValidatableType, errorFactory);
}
//# sourceMappingURL=validatable.js.map