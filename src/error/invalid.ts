import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";

export default class Invalid<ValidatableType extends ValidatableInterface>
    extends Error
    implements ValidatableContainer<ValidatableType>, Message<string> {

    readonly validatable : ValidatableType;

    constructor({validatable, message} : ValidatableContainer<ValidatableType> & Message<string>) {
        super(message);

        this.validatable = validatable;
    }
}

