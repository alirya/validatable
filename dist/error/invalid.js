export default class Invalid extends Error {
    constructor({ validatable, message }) {
        super(message);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=invalid.js.map