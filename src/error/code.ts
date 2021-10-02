import Validatable from "./validatable";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";

export default class Code<
    ValidatableType extends ValidatableInterface,
    CodeType
> extends Validatable<ValidatableType> implements CodeInterface<CodeType> {

    constructor(
        validatable : ValidatableType,
        message: string,
        readonly code: CodeType
    ) {
        super(validatable, message);
    }
}
