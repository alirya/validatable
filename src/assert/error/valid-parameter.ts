import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import {InvalidParameterType} from "../../error/invalid-parameters";
import ValidParameters from "./valid-parameters";

export type ValidParameterArgument<Argument extends Validatable> =
    ValidatableContainer<Argument> &
    {conversion?: (value: Argument) => string}

/**
 * assert if {@see Validatable} is valid
 */
export default function ValidParameter<
    ArgumentType extends Validatable = Validatable
>({validatable, conversion} : ValidParameterArgument<ArgumentType>) : InvalidParameterType<ArgumentType> {

    return ValidParameters(validatable, conversion)
}

