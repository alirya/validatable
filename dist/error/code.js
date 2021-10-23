import Invalid from "./invalid";
export default class Code extends Invalid {
    constructor(validatable, message, code) {
        if (arguments.length === 1) {
            ({ validatable, message, code } = validatable);
        }
        super(validatable, message);
        this.code = code;
    }
}
//# sourceMappingURL=code.js.map