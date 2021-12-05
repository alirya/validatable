import Name from "@dikac/t-object/string/name";
/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function ValidatableParameters(valid, value, subject) {
    const message = [];
    message.push(`${subject} "${Name(value)}"`.trim());
    if (valid) {
        message.push('is compatible with');
    }
    else {
        message.push('is not compatible with');
    }
    message.push('Validatable type.');
    return message.join(' ');
}
//# sourceMappingURL=validatable-parameters.js.map