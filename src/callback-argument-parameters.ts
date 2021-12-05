import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
import Callable from "@dikac/t-function/callable";
import Call from "@dikac/t-function/argument/value/call-parameter";

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

