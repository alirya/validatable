import Call from "@dikac/t-boolean/validation/boolean/call";
/**
 * create validatable from callback
 */
export default class CallbackArgument {
    constructor(argument, validation) {
        if (arguments.length === 1) {
            ({ argument, validation } = argument);
        }
        Object.assign(this, { argument, validation });
    }
    get valid() {
        return Call(this);
    }
}
//# sourceMappingURL=callback-argument.js.map