import ArgumentContainer from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
import CallbackArgumentParameters from "./callback-argument-parameters";
export declare type CallbackArgumentParameterArgument<Arguments extends any[], Return extends boolean> = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
/**
 * destructure version
 *
 * @param argument
 */
export default class CallbackArgumentParameter<Arguments extends unknown[], Return extends boolean> extends CallbackArgumentParameters<Arguments, Return> {
    constructor({ argument, validation }: CallbackArgumentParameterArgument<Arguments, Return>);
}
