import Validatable from "../validatable";
import ThrowableValid from "./throwable/valid";
import BooleanValid from "../boolean/valid";
import Callback from "@dikac/t-function/assert/callback";

/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (value:Argument)=>Error = ThrowableValid
) : asserts value is Assumption {

    Callback(value, BooleanValid, error);
}
