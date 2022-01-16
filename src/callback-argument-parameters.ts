import Validatable from "./validatable";
import ArgumentContainer from "@alirya/function/argument/argument";
import Validation from "@alirya/boolean/validation/validation";
import Callable from "@alirya/function/callable";
import Call from "@alirya/function/argument/value/call-parameter";

/**
 * create validatable from callback
 */
export default class CallbackArgumentParameters<
    Arguments extends any[],
    Return extends boolean,
    > implements Readonly<Validatable<Return> & ArgumentContainer<Arguments> & Validation<Arguments, Return>>
{
     /**
      * parameter version
      *
      * @param argument
      * @param validation
      */
     constructor(
         readonly argument : Arguments,
         readonly validation : Callable<Arguments, Return>,
        //  readonly validation : Argument<Arguments, Return>['validation'],
     ) {

          // Object.assign(this, {argument, validation});
     }

     get callback() : Callable<Arguments, Return> {

          return this.validation;
     }

     get valid () : Return {

          return <Return> Call(this);
     }
}

