import Name from "@dikac/t-object/string/name";
import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";

export default function Valid<ValidatableType extends Validatable>({
    validatable,
    conversion = Name,
} : ValidatableContainer<ValidatableType> & {conversion?:(object : ValidatableType) => string}) : string {

    const message : string[] = [];

    message.push(conversion(validatable).trim());

    if(validatable.valid) {

        message.push('is');

    } else {

        message.push('is not');
    }

    message.push('valid.');

    return message.join(' ');
}

