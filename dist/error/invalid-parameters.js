export default class InvalidParameters extends Error {
    constructor(validatable, message) {
        super(message);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=invalid-parameters.js.map