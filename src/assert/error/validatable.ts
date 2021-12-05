import ValidatableParameter from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";

namespace Validatable {

    export const Parameter = ValidatableParameter;
    export const Parameters = ValidatableParameters;
}
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
