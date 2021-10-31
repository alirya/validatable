import AssertType from "../assert/validatable";
import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ThrowableType from "../assert/error/validatable";
import {InvalidObject, InvalidParameter} from "../error/invalid";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */

namespace Validatable {

    export const Parameter = ValidatableParameter;
    export const Object = ValidatableObject;
}

export function ValidatableParameter(
    value : object,
    error : (value:object)=>Error = ThrowableType.Parameter,
) : Validatable {

    AssertType(value, error)

    return value;
}

export function ValidatableObject({value, error} : Value<object> & {error?:(value:object)=>Error}) : Validatable {

    return ValidatableParameter(value, error);
}

export default Validatable;
