import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
/**
 * create validatable from callback
 */
export default class CallbackArgument<Arguments extends any[], Return extends boolean> implements Readonly<Validatable<Return>>, Argument<Arguments>, Validation<Arguments, Return> {
    readonly argument: Arguments;
    readonly validation: (...args: Arguments) => Return;
    constructor({ argument, validation, }: Validation<Arguments, Return> & Argument<Arguments>);
    get valid(): Return;
}
