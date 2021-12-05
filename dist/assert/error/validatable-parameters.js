import ValidatableMessage from "../string/validatable-parameters";
export default function ValidatableParameters(value, subject) {
    return new Error(ValidatableMessage(false, value, subject));
}
//# sourceMappingURL=validatable-parameters.js.map