import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
import ValidatableContainer from "../validatable/validatable";
import Message from "@dikac/t-message/message";
import CodeParameters from "./code-parameters";
export declare type Argument<ValidatableType extends ValidatableInterface, CodeType> = ValidatableContainer<ValidatableType> & CodeInterface<CodeType> & Message<string>;
export default class CodeParameter<ValidatableType extends ValidatableInterface, CodeType> extends CodeParameters<ValidatableType, CodeType> {
    constructor({ validatable, message, code }: Argument<ValidatableType, CodeType>);
}
