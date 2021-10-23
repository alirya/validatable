import Invalid from "./invalid";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
import ValidatableContainer from "../validatable/validatable";
import Message from "@dikac/t-message/message";
export declare type Argument<ValidatableType extends ValidatableInterface, CodeType> = ValidatableContainer<ValidatableType> & CodeInterface<CodeType> & Message<string>;
export default class Code<ValidatableType extends ValidatableInterface, CodeType> extends Invalid<ValidatableType> implements CodeInterface<CodeType> {
    readonly code: CodeType;
    constructor({ validatable, message, code }: Argument<ValidatableType, CodeType>);
    constructor(validatable: ValidatableType, message: string, code: CodeType);
}
