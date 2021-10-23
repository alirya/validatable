import Invalid from "./invalid";
import ValidatableInterface from "../validatable";
import CodeInterface from "@dikac/t-code/code";
import ValidatableContainer from "../validatable/validatable";
import Message from "@dikac/t-message/message";

export type Argument<
    ValidatableType extends ValidatableInterface,
    CodeType
> = ValidatableContainer<ValidatableType> &
    CodeInterface<CodeType> &
    Message<string>;

export default class Code<
    ValidatableType extends ValidatableInterface,
    CodeType
> extends Invalid<ValidatableType> implements CodeInterface<CodeType> {

    readonly code : CodeType;

    constructor(argument : Argument<ValidatableType, CodeType>);

    constructor(
        validatable : ValidatableType,
        message: string,
        code: CodeType
    );

    constructor(
        validatable : ValidatableType|Argument<ValidatableType, CodeType>,
        message ?: string,
        code ?: CodeType
    ) {

        if(arguments.length === 1) {

            ({validatable, message, code} = validatable as Argument<ValidatableType, CodeType>);
        }


        super(validatable as ValidatableType, message as string);


        this.code = code as CodeType;
    }
}
