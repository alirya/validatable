export default class Validator extends Error {
    constructor(validatable, message) {
        super(message);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=validator.js.map