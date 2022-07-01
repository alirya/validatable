import Invalid from './invalid';
import ValidatableInterface from '../validatable';
import CodeInterface from '@alirya/code/code';
import ValidatableContainer from '../validatable/validatable';
import Message from '@alirya/message/message';

export class CodeParameters<
    ValidatableType extends ValidatableInterface,
    CodeType
    > extends Invalid.Parameters<ValidatableType> implements CodeInterface<CodeType> {


    constructor(
        validatable : ValidatableType,
        message: string,
        readonly code: CodeType
    ) {

        super(validatable, message);
    }
}

export type CodeArgument<
    ValidatableType extends ValidatableInterface,
    CodeType
    > = ValidatableContainer<ValidatableType> &
    CodeInterface<CodeType> &
    Message<string>;


export class CodeParameter<
    ValidatableType extends ValidatableInterface,
    CodeType
> extends CodeParameters<ValidatableType, CodeType> {

    constructor({validatable, message, code} : CodeArgument<ValidatableType, CodeType>) {

        super(validatable, message, code);
    }
}



namespace Code {
    export const Parameters = CodeParameters;
    export const Parameter = CodeParameter;
    export type Argument<
        ValidatableType extends ValidatableInterface,
        CodeType
    > = CodeArgument<
        ValidatableType,
        CodeType
    >;
}
export default Code;
