import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";
import StrictAssign from "@dikac/t-object/strict-assign";
import {List} from "ts-toolbelt";
import Map from "@dikac/t-object/map";
import {InvalidObject, InvalidParameter} from "./error/invalid";


export type Argument<
    Arguments extends any[],
    Return extends boolean,
    > = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
/**
 * create validatable from callback
 */
export class CallbackArgumentParameter<
    Arguments extends any[],
    Return extends boolean,
    > implements Readonly<Validatable<Return>>, ArgumentContainer<Arguments>, Validation<Arguments, Return>
{

     /**
      * parameter version
      *
      * @param argument
      * @param validation
      */
     constructor(
         readonly argument : Argument<Arguments, Return>['argument'],
         readonly validation : Argument<Arguments, Return>['validation'],
     )

     {


          Object.assign(this, {argument, validation});
     }

     get valid () : Return {

          return <Return> Call(this);
     }
}

/**
 * destructure version
 *
 * @param argument
 */
export class CallbackArgumentObject<Arguments extends any[],Return extends boolean>
    extends  CallbackArgumentParameter<Arguments, Return> {

     constructor({argument, validation} : Argument<Arguments, Return>) {
          super(argument, validation)
     }
}

namespace CallbackArgument {

     export const Parameter = CallbackArgumentParameter;
     export const Object = CallbackArgumentObject;
}

export default CallbackArgument;
