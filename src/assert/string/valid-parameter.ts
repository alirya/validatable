import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import ValidParameters from "./valid-parameters";

export type Argument<ValidatableType extends Validatable> =
    ValidatableContainer<ValidatableType> &
    {conversion?:(object : ValidatableType) => string};

export default function ValidParameter<ValidatableType extends Validatable>(
    {validatable, conversion} : Argument<ValidatableType>
) : string {

    return ValidParameters(validatable, conversion);
}


