import Name from "@dikac/t-object/string/name";
import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import {ValidatableObject, ValidatableParameter} from "./validatable";

export default Valid;

namespace Valid {

    export const Parameter = ValidParameter;
    export const Object = ValidObject;
}

export type Argument<ValidatableType extends Validatable> =
    ValidatableContainer<ValidatableType> &
    {conversion?:(object : ValidatableType) => string};

export function ValidObject<ValidatableType extends Validatable>(
    {validatable, conversion} : Argument<ValidatableType>
) : string {

    return ValidParameter(validatable, conversion);
}

export function ValidParameter<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    conversion : (object : ValidatableType) => string = Name,
) : string {

    const message : string[] = [];

    message.push(conversion(validatable).trim());

    if((validatable).valid) {

        message.push('is');

    } else {

        message.push('is not');
    }

    message.push('valid.');

    return message.join(' ');
}

