import Name from "@dikac/t-object/string/name";
var Valid;
(function (Valid) {
    Valid.Parameter = ValidParameter;
    Valid.Object = ValidObject;
})(Valid || (Valid = {}));
export function ValidObject({ validatable, conversion }) {
    return ValidParameter(validatable, conversion);
}
export function ValidParameter(validatable, conversion = Name) {
    const message = [];
    message.push(conversion(validatable).trim());
    if ((validatable).valid) {
        message.push('is');
    }
    else {
        message.push('is not');
    }
    message.push('valid.');
    return message.join(' ');
}
export default Valid;
//# sourceMappingURL=valid.js.map