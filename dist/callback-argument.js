import Call from "@dikac/t-boolean/validation/boolean/call";
/**
 * create validatable from callback
 */
export class CallbackArgumentParameter {
    /**
     * parameter version
     *
     * @param argument
     * @param validation
     */
    constructor(argument, validation) {
        this.argument = argument;
        this.validation = validation;
        Object.assign(this, { argument, validation });
    }
    get valid() {
        return Call(this);
    }
}
/**
 * destructure version
 *
 * @param argument
 */
export class CallbackArgumentObject extends CallbackArgumentParameter {
    constructor({ argument, validation }) {
        super(argument, validation);
    }
}
var CallbackArgument;
(function (CallbackArgument) {
    CallbackArgument.Parameter = CallbackArgumentParameter;
    CallbackArgument.Object = CallbackArgumentObject;
})(CallbackArgument || (CallbackArgument = {}));
export default CallbackArgument;
//# sourceMappingURL=callback-argument.js.map