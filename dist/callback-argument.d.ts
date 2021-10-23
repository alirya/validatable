import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type Argument<Arguments extends any[], Return extends boolean> = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
/**
 * create validatable from callback
 */
export default class CallbackArgument<Arguments extends any[], Return extends boolean> implements Readonly<Validatable<Return>>, ArgumentContainer<Arguments>, Validation<Arguments, Return> {
    readonly argument: Arguments;
    readonly validation: (...args: Arguments) => Return;
    /**
     * destructure version
     *
     * @param argument
     */
    constructor(argument: Argument<Arguments, Return>);
    /**
     * parameter version
     *
     * @param argument
     * @param validation
     */
    constructor(argument: Argument<Arguments, Return>['argument'], validation: Argument<Arguments, Return>['validation']);
    get valid(): Return;
}
