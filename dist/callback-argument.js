import CallbackArgumentParameters from "./callback-argument-parameters";
import CallbackArgumentParameter from "./callback-argument-parameter";
//
// export type Argument<
//     Arguments extends any[],
//     Return extends boolean,
//     > = Validation<Arguments, Return> & ArgumentContainer<Arguments>;
// /**
//  * create validatable from callback
//  */
// export class CallbackArgumentParameter<
//     Arguments extends any[],
//     Return extends boolean,
//     > implements Readonly<Validatable<Return>>, ArgumentContainer<Arguments>, Validation<Arguments, Return>
// {
//
//      /**
//       * parameter version
//       *
//       * @param argument
//       * @param validation
//       */
//      constructor(
//          readonly argument : Argument<Arguments, Return>['argument'],
//          readonly validation : Argument<Arguments, Return>['validation'],
//      )
//
//      {
//
//
//           Object.assign(this, {argument, validation});
//      }
//
//      get valid () : Return {
//
//           return <Return> Call(this);
//      }
// }
//
// /**
//  * destructure version
//  *
//  * @param argument
//  */
// export class CallbackArgumentObject<Arguments extends any[],Return extends boolean>
//     extends  CallbackArgumentParameter<Arguments, Return> {
//
//      constructor({argument, validation} : Argument<Arguments, Return>) {
//           super(argument, validation)
//      }
// }
var CallbackArgument;
(function (CallbackArgument) {
    CallbackArgument.Parameters = CallbackArgumentParameters;
    CallbackArgument.Parameter = CallbackArgumentParameter;
})(CallbackArgument || (CallbackArgument = {}));
export default CallbackArgument;
//# sourceMappingURL=callback-argument.js.map