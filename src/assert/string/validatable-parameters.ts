import Name from "@alirya/object/string/name";

/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function ValidatableParameters(
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

