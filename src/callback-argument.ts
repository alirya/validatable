import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";
import StrictAssign from "@dikac/t-object/strict-assign";

/**
 * create validatable from callback
 */
export default class CallbackArgument<
    Arguments extends any[],
    Return extends boolean,
    > implements Readonly<Validatable<Return>>, Argument<Arguments>, Validation<Arguments, Return>
{
     readonly argument : Arguments;
     readonly validation : (...args:Arguments)=>Return;

     constructor({
         argument,
         validation,
     } : Validation<Arguments, Return> & Argument<Arguments>) {

          this.argument = argument;
          this.validation = validation;
     }

     get valid () : Return {

          return <Return> Call(this);
     }

}
