import ValidatableMessage from "../string/validatable";
var Validatable;
(function (Validatable) {
    Validatable.Parameter = ValidatableParameter;
    Validatable.Object = ValidatableObject;
})(Validatable || (Validatable = {}));
export function ValidatableObject({ value, subject }) {
    return ValidatableParameter(value, subject);
}
export function ValidatableParameter(value, subject) {
    return new Error(ValidatableMessage.Parameter(false, value, subject));
}
export default Validatable;
//# sourceMappingURL=validatable.js.map