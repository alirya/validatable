import ValidatableMessage from "../string/validatable";
export default Validatable;
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
//# sourceMappingURL=validatable.js.map