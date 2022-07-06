import ValidatableInterface from '../validatable.js';
import ValidatableContainer from '../validatable/Validatable.js';
import Message from '@alirya/message/message.js';


export type InvalidParameterType<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string> & Error;

export class InvalidParameters<ValidatableType extends ValidatableInterface>
    extends Error
    implements InvalidParameterType<ValidatableType> {

    constructor(
        readonly validatable : ValidatableType,
        message : string
    ) {

        super(message);
    }
}



export type InvalidArgument<ValidatableType extends ValidatableInterface> =
    ValidatableContainer<ValidatableType> & Message<string>;

export class InvalidParameter<ValidatableType extends ValidatableInterface> extends InvalidParameters<ValidatableType> {

    constructor({validatable, message} : InvalidArgument<ValidatableType>) {

        super(validatable, message);
    }
}




namespace Invalid {
    export const Parameters = InvalidParameters;
    export const Parameter = InvalidParameter;
    export type Argument<ValidatableType extends ValidatableInterface> = InvalidArgument<ValidatableType>;
}
export default Invalid;
