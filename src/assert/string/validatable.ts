import Name from '@alirya/object/string/name.js';
import ValidatableType from '../../validatable.js';
import Value from '@alirya/value/value.js';
/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export function ValidatableParameters(
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



export type ValidatableArgument = ValidatableType & Value<object> & {subject ?: string};

export function ValidatableParameter({valid, value, subject} : ValidatableArgument) : string {

    return ValidatableParameters(valid, value, subject);
}


namespace Validatable {
    export const Parameters = ValidatableParameters;
    export const Parameter = ValidatableParameter;
    export type Argument = ValidatableArgument;
}
export default Validatable;
