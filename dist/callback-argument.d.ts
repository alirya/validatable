import CallbackArgumentParameters from "./callback-argument-parameters";
import CallbackArgumentParameter, { CallbackArgumentParameterArgument } from "./callback-argument-parameter";
declare namespace CallbackArgument {
    const Parameters: typeof CallbackArgumentParameters;
    const Parameter: typeof CallbackArgumentParameter;
    type Parameter<Arguments extends unknown[], Return extends boolean> = CallbackArgumentParameterArgument<Arguments, Return>;
}
export default CallbackArgument;
