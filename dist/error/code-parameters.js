import Invalid from "./invalid-parameters";
export default class CodeParameters extends Invalid {
    constructor(validatable, message, code) {
        super(validatable, message);
        this.code = code;
    }
}
//# sourceMappingURL=code-parameters.js.map