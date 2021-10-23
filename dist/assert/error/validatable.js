import ValidatableMessage from "../string/validatable";
export default function Validatable(value, subject = '') {
    if (arguments.length === 1) {
        ({ value, subject } = value);
    }
    return new Error(ValidatableMessage({ valid: false, value, subject }));
}
//# sourceMappingURL=validatable.js.map