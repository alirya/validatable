import Invalid from "./invalid";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
import ValidatableContainer from "../validatable/validatable";
import Message from "@dikac/t-message/message";
export declare type Argument<ValidatableType extends ValidatableInterface, CodeType> = ValidatableContainer<ValidatableType> & CodeInterface<CodeType> & Message<string>;
export declare class CodeParameter<ValidatableType extends ValidatableInterface, CodeType> extends Invalid.Parameter<ValidatableType> implements CodeInterface<CodeType> {
    readonly code: CodeType;
    constructor(validatable: ValidatableType, message: string, code: CodeType);
}
export declare class CodeObject<ValidatableType extends ValidatableInterface, CodeType> extends CodeParameter<ValidatableType, CodeType> {
    constructor({ validatable, message, code }: Argument<ValidatableType, CodeType>);
}
declare namespace Code {
    const Parameter: typeof CodeParameter;
    const Object: typeof CodeObject;
}
export default Code;
