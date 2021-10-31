import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";

export type Argument<ValidatableType extends ValidatableInterface> =
    ValidatableContainer<ValidatableType> & Message<string>;

export type InvalidParameterType<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string> & Error;

export class InvalidParameter<ValidatableType extends ValidatableInterface>
    extends Error
    implements InvalidParameterType<ValidatableType> {

    constructor(
        readonly validatable : Argument<ValidatableType>['validatable'],
        message : Argument<ValidatableType>['message']
    ) {

        super(message);
    }
}

export class InvalidObject<ValidatableType extends ValidatableInterface> extends InvalidParameter<ValidatableType> {

    constructor({validatable, message} : Argument<ValidatableType>) {

        super(validatable, message)
    }
}

namespace Invalid {

    export const Parameter = InvalidParameter;
    export const Object = InvalidObject;
    export type Type<ValidatableType extends ValidatableInterface> = InvalidParameterType<ValidatableType>;
}

export default Invalid;

