import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";
import ValidParameters from "./valid-parameters";

export type ValidParameterArgument<Argument extends Validatable> =
    ValidatableContainer<Argument> &
    {conversion?: (value: Argument) => string}

/**
 * assert if {@see Validatable} is valid
 */
export default function ValidParameter<
    ArgumentType extends Validatable = Validatable
>({validatable, conversion} : ValidParameterArgument<ArgumentType>) : Invalid.Type<ArgumentType> {

    return ValidParameters(validatable, conversion)
}

