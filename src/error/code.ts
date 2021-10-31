import Invalid, {InvalidObject, InvalidParameter} from "./invalid";
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

export class CodeParameter<
    ValidatableType extends ValidatableInterface,
    CodeType
    > extends Invalid.Parameter<ValidatableType> implements CodeInterface<CodeType> {


    constructor(
        validatable : ValidatableType,
        message: string,
        readonly code: CodeType
    ) {

        super(validatable, message as string);
    }
}

export class CodeObject<
    ValidatableType extends ValidatableInterface,
    CodeType
> extends CodeParameter<ValidatableType, CodeType> {

    constructor({validatable, message, code} : Argument<ValidatableType, CodeType>) {

        super(validatable, message, code)
    }
}

namespace Code {

    export const Parameter = CodeParameter;
    export const Object = CodeObject;
}


export default Code;
