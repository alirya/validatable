import ValidatableInterface from "../validatable";
import InvalidParameters, { InvalidParameterType } from "./invalid-parameters";
import InvalidParameter, { InvalidParameterArgument } from "./invalid-parameter";
declare namespace Invalid {
    const Parameters: typeof InvalidParameters;
    const Parameter: typeof InvalidParameter;
    type Type<ValidatableType extends ValidatableInterface> = InvalidParameterType<ValidatableType>;
    type Argument<ValidatableType extends ValidatableInterface> = InvalidParameterArgument<ValidatableType>;
}
export default Invalid;
