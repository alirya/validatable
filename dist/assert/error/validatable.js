import ValidatableMessage from "../string/validatable";
export default function Validatable({ value, subject = '' }) {
    return new Error(ValidatableMessage({ valid: false, value, subject }));
}
//# sourceMappingURL=validatable.js.map