import Name from "@dikac/t-object/string/name";
export default function Validatable(valid, value, subject = '') {
    if (arguments.length === 1) {
        ({ valid, value, subject } = valid);
    }
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
//# sourceMappingURL=validatable.js.map