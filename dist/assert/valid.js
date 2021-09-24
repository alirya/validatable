import ThrowableValid from "./throwable/valid";
import BooleanValid from "../boolean/valid";
import Callback from "@dikac/t-function/assert/callback";
/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */
export default function Valid(value, error = ThrowableValid) {
    Callback(value, BooleanValid, error);
}
//# sourceMappingURL=valid.js.map