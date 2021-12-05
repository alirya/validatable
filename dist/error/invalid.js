import InvalidParameters from "./invalid-parameters";
import InvalidParameter from "./invalid-parameter";
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
var Invalid;
(function (Invalid) {
    Invalid.Parameters = InvalidParameters;
    Invalid.Parameter = InvalidParameter;
})(Invalid || (Invalid = {}));
export default Invalid;
//# sourceMappingURL=invalid.js.map