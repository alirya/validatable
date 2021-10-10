import Invalid from "./invalid";
export default class Code extends Invalid {
    constructor(validatable, message, code) {
        super(validatable, message);
        this.code = code;
    }
}
//# sourceMappingURL=code.js.map