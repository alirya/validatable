import Call from "@dikac/t-function/argument/value/call-parameter";
/**
 * create validatable from callback
 */
export default class CallbackArgumentParameters {
    /**
     * parameter version
     *
     * @param argument
     * @param validation
     */
    constructor(argument, validation) {
        this.argument = argument;
        this.validation = validation;
        // Object.assign(this, {argument, validation});
    }
    get callback() {
        return this.validation;
    }
    get valid() {
        return Call(this);
    }
}
//# sourceMappingURL=callback-argument-parameters.js.map