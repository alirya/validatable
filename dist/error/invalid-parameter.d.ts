import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";
import InvalidParameters from "./invalid-parameters";
export declare type InvalidParameterArgument<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string>;
export default class InvalidParameter<ValidatableType extends ValidatableInterface> extends InvalidParameters<ValidatableType> {
    constructor({ validatable, message }: InvalidParameterArgument<ValidatableType>);
}
