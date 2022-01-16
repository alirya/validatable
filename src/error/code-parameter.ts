import ValidatableInterface from "../validatable";
import CodeInterface from "@alirya/code/code";
import ValidatableContainer from "../validatable/validatable";
import Message from "@alirya/message/message";
import CodeParameters from "./code-parameters";


export type Argument<
    ValidatableType extends ValidatableInterface,
    CodeType
    > = ValidatableContainer<ValidatableType> &
    CodeInterface<CodeType> &
    Message<string>;


export default class CodeParameter<
    ValidatableType extends ValidatableInterface,
    CodeType
> extends CodeParameters<ValidatableType, CodeType> {

    constructor({validatable, message, code} : Argument<ValidatableType, CodeType>) {

        super(validatable, message, code)
    }
}

