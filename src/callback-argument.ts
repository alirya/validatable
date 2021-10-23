import Validatable from "./validatable";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";
import StrictAssign from "@dikac/t-object/strict-assign";
import {List} from "ts-toolbelt";
import Map from "@dikac/t-object/map";


export type Argument<
    Arguments extends any[],
    Return extends boolean,
    > = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
/**
 * create validatable from callback
 */
export default class CallbackArgument<
    Arguments extends any[],
    Return extends boolean,
    > implements Readonly<Validatable<Return>>, ArgumentContainer<Arguments>, Validation<Arguments, Return>
{
     // readonly argument : Arguments;
     // readonly validation : (...args:Arguments)=>Return;

     readonly argument !: Arguments;
     readonly validation !: (...args:Arguments)=>Return;

     /**
      * destructure version
      *
      * @param argument
      */
     constructor(argument : Argument<Arguments, Return>);

     /**
      * parameter version
      *
      * @param argument
      * @param validation
      */
     constructor(
         argument : Argument<Arguments, Return>['argument'],
         validation : Argument<Arguments, Return>['validation'],
     );

     constructor(
         argument : Argument<Arguments, Return>['argument']|Argument<Arguments, Return>,
         validation ?: Argument<Arguments, Return>['validation'],
     ) {

          if(arguments.length === 1) {

               ({argument, validation} = argument as Validation<Arguments, Return> & ArgumentContainer<Arguments>);
          }

          Object.assign(this, {argument, validation});
     }

     get valid () : Return {

          return <Return> Call(this);
     }
}
