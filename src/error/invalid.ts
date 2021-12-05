import ValidatableInterface from "../validatable";
import InvalidParameters, {InvalidParameterType} from "./invalid-parameters";
import InvalidParameter, {InvalidParameterArgument} from "./invalid-parameter";

// export type Argument<ValidatableType extends ValidatableInterface> =
//     ValidatableContainer<ValidatableType> & Message<string>;
//
// export type InvalidParameterType<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string> & Error;
//
// export class InvalidParameter<ValidatableType extends ValidatableInterface>
//     extends Error
//     implements InvalidParameterType<ValidatableType> {
//
//     constructor(
//         readonly validatable : Argument<ValidatableType>['validatable'],
//         message : Argument<ValidatableType>['message']
//     ) {
//
//         super(message);
//     }
// }
//
// export class InvalidObject<ValidatableType extends ValidatableInterface> extends InvalidParameter<ValidatableType> {
//
//     constructor({validatable, message} : Argument<ValidatableType>) {
//
//         super(validatable, message)
//     }
// }

namespace Invalid {

    export const Parameters = InvalidParameters;
    export const Parameter = InvalidParameter;
    export type Type<ValidatableType extends ValidatableInterface> = InvalidParameterType<ValidatableType>;
    export type Argument<ValidatableType extends ValidatableInterface> = InvalidParameterArgument<ValidatableType>;
}

export default Invalid;

