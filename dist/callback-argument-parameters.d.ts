import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
import Callable from "@dikac/t-function/callable";
/**
 * create validatable from callback
 */
export default class CallbackArgumentParameters<Arguments extends any[], Return extends boolean> implements Readonly<Validatable<Return> & ArgumentContainer<Arguments> & Validation<Arguments, Return>> {
    readonly argument: Arguments;
    readonly validation: Callable<Arguments, Return>;
    /**
     * parameter version
     *
     * @param argument
     * @param validation
     */
    constructor(argument: Arguments, validation: Callable<Arguments, Return>);
    get callback(): Callable<Arguments, Return>;
    get valid(): Return;
}
