import Invalid from "./invalid";
export default Code;
export class CodeParameter extends Invalid.Parameter {
    constructor(validatable, message, code) {
        super(validatable, message);
        this.code = code;
    }
}
export class CodeObject extends CodeParameter {
    constructor({ validatable, message, code }) {
        super(validatable, message, code);
    }
}
var Code;
(function (Code) {
    Code.Parameter = CodeParameter;
    Code.Object = CodeObject;
})(Code || (Code = {}));
//# sourceMappingURL=code.js.map