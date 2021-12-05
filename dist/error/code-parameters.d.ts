import Invalid from "./invalid-parameters";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
export default class CodeParameters<ValidatableType extends ValidatableInterface, CodeType> extends Invalid<ValidatableType> implements CodeInterface<CodeType> {
    readonly code: CodeType;
    constructor(validatable: ValidatableType, message: string, code: CodeType);
}
