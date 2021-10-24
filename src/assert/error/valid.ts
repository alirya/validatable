import ValidType from "../string/valid";
import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";

export default Valid;

namespace Valid {

    export const Parameter = ValidParameter;
    export const Object = ValidObject;
}

export type Argument<Argument extends Validatable> =
    ValidatableContainer<Argument> &
    {conversion?: (value: Argument) => string}

/**
 * assert if {@see Validatable} is valid
 */
export function ValidObject<
    ArgumentType extends Validatable = Validatable
>({validatable, conversion} : Argument<ArgumentType>) : Invalid.Type<ArgumentType> {

    return ValidParameter(validatable, conversion)
}

export function ValidParameter<
    ArgumentType extends Validatable = Validatable
>(
    validatable : ArgumentType,
    conversion : (value:ArgumentType)=>string = value => typeof value
) : Invalid.Type<ArgumentType> {

    return new Invalid.Parameter(validatable as ArgumentType, ValidType.Parameter(validatable as ArgumentType, conversion));
}
