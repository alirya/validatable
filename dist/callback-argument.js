import Call from "@dikac/t-boolean/validation/boolean/call";
/**
 * create validatable from callback
 */
export default class CallbackArgument {
    constructor({ argument, validation, }) {
        this.argument = argument;
        this.validation = validation;
    }
    get valid() {
        return Call(this);
    }
}
//# sourceMappingURL=callback-argument.js.map