import Name from "@dikac/t-object/string/name";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function Validatable(
    valid : boolean,
    value : object,
    subject : string = '',
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
