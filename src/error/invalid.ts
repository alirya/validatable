import ValidatableInterface from "../validatable";
import ValidatableContainer from "../validatable/Validatable";
import Message from "@dikac/t-message/message";

export type Argument<ValidatableType extends ValidatableInterface> =
    ValidatableContainer<ValidatableType> & Message<string>;

export default class Invalid<ValidatableType extends ValidatableInterface>
    extends Error
    implements ValidatableContainer<ValidatableType>, Message<string> {

    readonly validatable : ValidatableType;

    constructor(argument : Argument<ValidatableType>);

    constructor(
        validatable : Argument<ValidatableType>['validatable'],
        message : Argument<ValidatableType>['message']
    );

    constructor(
        validatable : Argument<ValidatableType>['validatable']|Argument<ValidatableType>,
        message ?: Argument<ValidatableType>['message']
    ) {

        if(arguments.length === 1) {

            ({validatable, message} = validatable as Argument<ValidatableType>);
        }

        super(message);

        this.validatable = validatable as ValidatableType;
    }
}

