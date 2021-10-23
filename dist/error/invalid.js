export default class Invalid extends Error {
    constructor(validatable, message) {
        if (arguments.length === 1) {
            ({ validatable, message } = validatable);
        }
        super(message);
        this.validatable = validatable;
    }
}
//# sourceMappingURL=invalid.js.map