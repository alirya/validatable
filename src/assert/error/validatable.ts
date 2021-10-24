import ValidatableMessage from "../string/validatable";
import Value from "@dikac/t-value/value";

export default Validatable;

namespace Validatable {

    export const Parameter = ValidatableParameter;
    export const Object = ValidatableObject;
}

export function ValidatableObject({value, subject} : Value<object> & {subject ?: string}) : Error {

    return ValidatableParameter(value, subject);
}

export function ValidatableParameter(
    value : object,
    subject ?: string
) : Error {

    return new Error(ValidatableMessage.Parameter(false, value, subject));
}
