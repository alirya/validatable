import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";
export declare type Argument<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string>;
export default class Invalid<ValidatableType extends ValidatableInterface> extends Error implements ValidatableContainer<ValidatableType>, Message<string> {
    readonly validatable: ValidatableType;
    constructor({ validatable, message }: Argument<ValidatableType>);
    constructor(validatable: Argument<ValidatableType>['validatable'], message: Argument<ValidatableType>['message']);
}
