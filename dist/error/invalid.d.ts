import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";
export declare type Argument<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string>;
export declare type InvalidParameterType<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string> & Error;
export declare class InvalidParameter<ValidatableType extends ValidatableInterface> extends Error implements InvalidParameterType<ValidatableType> {
    readonly validatable: Argument<ValidatableType>['validatable'];
    constructor(validatable: Argument<ValidatableType>['validatable'], message: Argument<ValidatableType>['message']);
}
export declare class InvalidObject<ValidatableType extends ValidatableInterface> extends InvalidParameter<ValidatableType> {
    constructor({ validatable, message }: Argument<ValidatableType>);
}
declare namespace Invalid {
    const Parameter: typeof InvalidParameter;
    const Object: typeof InvalidObject;
    type Type<ValidatableType extends ValidatableInterface> = InvalidParameterType<ValidatableType>;
}
export default Invalid;
