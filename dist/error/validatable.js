export default class Validatable extends Error {
    constructor(validatable, message) {
        super(message);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=validatable.js.map