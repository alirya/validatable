import Validatable from "./validatable";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
export default class Code<ValidatableType extends ValidatableInterface, CodeType> extends Validatable<ValidatableType> implements CodeInterface<CodeType> {
    readonly code: CodeType;
    constructor(validatable: ValidatableType, message: string, code: CodeType);
}
