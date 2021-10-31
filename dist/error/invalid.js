export class InvalidParameter extends Error {
    constructor(validatable, message) {
        super(message);
        this.validatable = validatable;
    }
}
export class InvalidObject extends InvalidParameter {
    constructor({ validatable, message }) {
        super(validatable, message);
    }
}
var Invalid;
(function (Invalid) {
    Invalid.Parameter = InvalidParameter;
    Invalid.Object = InvalidObject;
})(Invalid || (Invalid = {}));
export default Invalid;
//# sourceMappingURL=invalid.js.map