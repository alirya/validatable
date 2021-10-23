import AssertType from "../assert/validatable";
import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ThrowableType from "../assert/error/validatable";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */

export default function Validatable(argument : Value<object> & {error?:(value:object)=>Error}) : Validatable;

export default function Validatable(
    value : Value<object>,
    error ?:(value:object)=>Error,
) : Validatable

export default function Validatable(
    value,
    error = ThrowableType,
) : Validatable {

    AssertType(value, error)

    return value;
}


