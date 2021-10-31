import ThrowableValid from "./error/valid";
import BooleanValid from "../boolean/valid";
import Callback from "@dikac/t-function/assert/callback";
/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */
export default function Valid(value, error = ThrowableValid.Parameter) {
    Callback.Parameter(value, BooleanValid, error);
}
//# sourceMappingURL=valid.js.map