import AssertType from '../assert/validatable.js';
import Validatable from '../validatable.js';
import ThrowableType from '../assert/error/validatable.js';
import Value from '@axiona/value/value.js';

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export function ValidatableParameters(
    value : object,
    error : (value:object)=>Error = ThrowableType.Parameters,
) : Validatable {

    AssertType(value, error);

    return value;
}


/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export function ValidatableParameter({value, error} : Value<object> & {error?:(value:object)=>Error}) : Validatable {

    return ValidatableParameters(value, error);
}


namespace Validatable {
    export const Parameters = ValidatableParameters;
    export const Parameter = ValidatableParameter;
}
export default Validatable;
