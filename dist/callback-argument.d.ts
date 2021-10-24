import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type Argument<Arguments extends any[], Return extends boolean> = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
/**
 * create validatable from callback
 */
export declare class CallbackArgumentParameter<Arguments extends any[], Return extends boolean> implements Readonly<Validatable<Return>>, ArgumentContainer<Arguments>, Validation<Arguments, Return> {
    readonly argument: Argument<Arguments, Return>['argument'];
    readonly validation: Argument<Arguments, Return>['validation'];
    /**
     * parameter version
     *
     * @param argument
     * @param validation
     */
    constructor(argument: Argument<Arguments, Return>['argument'], validation: Argument<Arguments, Return>['validation']);
    get valid(): Return;
}
/**
 * destructure version
 *
 * @param argument
 */
export declare class CallbackArgumentObject<Arguments extends any[], Return extends boolean> extends CallbackArgumentParameter<Arguments, Return> {
    constructor({ argument, validation }: Argument<Arguments, Return>);
}
declare namespace CallbackArgument {
    const Parameter: typeof CallbackArgumentParameter;
    const Object: typeof CallbackArgumentObject;
}
export default CallbackArgument;
