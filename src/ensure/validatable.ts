import AssertType from '../assert/validatable';
import Validatable from '../validatable';
import ThrowableType from '../assert/error/validatable';
import Value from '@alirya/value/value';

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
