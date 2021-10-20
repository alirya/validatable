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

export default function Validatable({
    valid,
    value,
    subject = '',
} : ValidatableType & Value<object> & {subject ?: string}) : string {

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
