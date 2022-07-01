import ValidatableMessage from '../string/validatable';
import Value from '@alirya/value/value';

export function ValidatableParameters(
    value : object,
    subject ?: string
) : Error {

    return new Error(ValidatableMessage.Parameters(false, value, subject));
}


export function ValidatableParameter({value, subject} : Value<object> & {subject ?: string}) : Error {

    return ValidatableParameters(value, subject);
}


namespace Validatable {
    export const Parameters = ValidatableParameters;
    export const Parameter = ValidatableParameter;
}
export default Validatable;
