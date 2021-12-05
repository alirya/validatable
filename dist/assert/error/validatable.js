import ValidatableParameter from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";
var Validatable;
(function (Validatable) {
    Validatable.Parameter = ValidatableParameter;
    Validatable.Parameters = ValidatableParameters;
})(Validatable || (Validatable = {}));
//
// export function ValidatableObject({value, subject} : Value<object> & {subject ?: string}) : Error {
//
//     return ValidatableParameter(value, subject);
// }
//
// export function ValidatableParameter(
//     value : object,
//     subject ?: string
// ) : Error {
//
//     return new Error(ValidatableMessage.Parameter(false, value, subject));
// }
//
export default Validatable;
//# sourceMappingURL=validatable.js.map