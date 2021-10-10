import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";

export default class Invalid<ValidatableType extends ValidatableInterface>
    extends Error
    implements ValidatableContainer<ValidatableType>, Message<string> {

    constructor(readonly validatable : ValidatableType, message: string) {
        super(message);
    }
}

