import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";


export type InvalidParameterType<ValidatableType extends ValidatableInterface> = ValidatableContainer<ValidatableType> & Message<string> & Error;

export default class InvalidParameters<ValidatableType extends ValidatableInterface>
    extends Error
    implements InvalidParameterType<ValidatableType> {

    constructor(
        readonly validatable : ValidatableType,
        message : string
    ) {

        super(message);
    }
}

