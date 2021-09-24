import Validatable from "../validatable";
import ValidatableContainer from "../validatable/Validatable";

export default class Validator<ValidatableType extends Validatable>
    extends Error
    implements ValidatableContainer<ValidatableType> {

    constructor(readonly validatable : ValidatableType, message?: string) {
        super(message);
    }
}

