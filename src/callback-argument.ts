import Validatable from './validatable.js';
import ArgumentContainer from '@axiona/function/argument/argument.js';
import Validation from '@axiona/boolean/validation/validation.js';
import Callable from '@axiona/function/callable.js';
import {CallParameter} from '@axiona/function/argument/value/call.js';

/**
 * create validatable from callback
 */
export class CallbackArgumentParameters<
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
     ) {

     }

     get callback() : Callable<Arguments, Return> {

          return this.validation;
     }

     get valid () : Return {

          return <Return> CallParameter(this);
     }
}




export type CallbackArgumentArgument<
    Arguments extends any[],
    Return extends boolean,
    > = Validation<Arguments, Return> & ArgumentContainer<Arguments>;


/**
 * destructure version
 *
 * @param argument
 */
export class CallbackArgumentParameter<Arguments extends unknown[], Return extends boolean>
    extends  CallbackArgumentParameters<Arguments, Return> {

     constructor({argument, validation} : CallbackArgumentArgument<Arguments, Return>) {
          super(argument, validation);
     }
}



namespace CallbackArgument {
    export const Parameters = CallbackArgumentParameters;
    export const Parameter = CallbackArgumentParameter;
}
export default CallbackArgument;
