import Name from "@dikac/t-object/string/name";
import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";

export type Argument<ValidatableType extends Validatable> =
    ValidatableContainer<ValidatableType> &
    {conversion?:(object : ValidatableType) => string};

export default function Valid<ValidatableType extends Validatable>({
    validatable,
    conversion,
} : Argument<ValidatableType>) : string;

export default function Valid<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    conversion ?: (object : ValidatableType) => string,
) : string

export default function Valid<ValidatableType extends Validatable>(
    validatable: ValidatableType|Argument<ValidatableType>,
    conversion : (object : ValidatableType) => string = Name,
) : string {

    if(arguments.length === 1) {

        ({conversion, validatable} = validatable as Required<Argument<ValidatableType>>)
    }

    const message : string[] = [];

    message.push(conversion(validatable as ValidatableType).trim());

    if((validatable as ValidatableType).valid) {

        message.push('is');

    } else {

        message.push('is not');
    }

    message.push('valid.');

    return message.join(' ');
}

