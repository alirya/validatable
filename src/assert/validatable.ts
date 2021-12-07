import ValidatableType from "../boolean/validatable";
import ThrowableType from "./error/validatable-parameters";
import Validatable from "../validatable";
import Callback from "@dikac/t-function/assert/callback-parameters";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Validatable(
    value : object,
    errorFactory : (value:object)=>Error = ThrowableType
) : asserts value is Validatable {

    Callback(value, ValidatableType, errorFactory);
}
