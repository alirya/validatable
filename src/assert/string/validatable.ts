import Name from "@dikac/t-object/string/name";
import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export type Argument = ValidatableType & Value<object> & {subject ?: string};

export default function Validatable(argument : Argument) : string;

export default function Validatable(
    valid : boolean,
    value : object,
    subject ?: string,
) : string;

export default function Validatable(
    valid : boolean|Argument,
    value ? : object,
    subject : string = '',
) : string {

    if(arguments.length === 1) {

        ({valid, value, subject} = valid as Required<Argument>)
    }


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
