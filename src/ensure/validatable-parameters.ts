import AssertType from "../assert/validatable";
import Validatable from "../validatable";
import ThrowableType from "../assert/error/validatable-parameters";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function ValidatableParameters(
    value : object,
    error : (value:object)=>Error = ThrowableType,
) : Validatable {

    AssertType(value, error)

    return value;
}

