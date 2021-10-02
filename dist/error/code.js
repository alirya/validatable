import Validatable from "./validatable";
export default class Code extends Validatable {
    constructor(validatable, message, code) {
        super(validatable, message);
        this.code = code;
    }
}
//# sourceMappingURL=code.js.map