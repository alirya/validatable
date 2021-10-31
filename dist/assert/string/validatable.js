import Name from "@dikac/t-object/string/name";
var Validatable;
(function (Validatable) {
    Validatable.Parameter = ValidatableParameter;
    Validatable.Object = ValidatableObject;
})(Validatable || (Validatable = {}));
export function ValidatableObject({ valid, value, subject }) {
    return ValidatableParameter(valid, value, subject);
}
/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export function ValidatableParameter(valid, value, subject) {
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
export default Validatable;
//# sourceMappingURL=validatable.js.map