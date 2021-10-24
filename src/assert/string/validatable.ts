import Name from "@dikac/t-object/string/name";
import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";

export default Validatable;

namespace Validatable {

    export const Parameter = ValidatableParameter;
    export const Object = ValidatableObject;
}

export type Argument = ValidatableType & Value<object> & {subject ?: string};

export function ValidatableObject({valid, value, subject} : Argument) : string {

    return ValidatableParameter(valid, value, subject);
}
/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export function ValidatableParameter(
    valid : boolean,
    value : object,
    subject ?: string,
) : string {

    const message : string[] = [];

    message.push(`${subject} "${Name(value)}"`.trim());

    if(valid) {

        message.push('is compatible with');

    } else {

        message.push('is not compatible with');
    }

    message.push('Validatable type.');

    return message.join(' ');
}
