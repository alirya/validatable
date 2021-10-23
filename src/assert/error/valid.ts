import ValidType from "../string/valid";
import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";

export type Argument<Argument extends Validatable> =
    ValidatableContainer<Argument> &
    {conversion?: (value: Argument) => string}
;
/**
 * assert if {@see Validatable} is valid
 *
 * @param validatable
 * @param conversion
 */
export default function Valid<
    ArgumentType extends Validatable = Validatable
>({
    validatable,
    conversion,
} : Argument<ArgumentType>) : Invalid<ArgumentType>;

export default function Valid<
    ArgumentType extends Validatable = Validatable
>(
    validatable : ArgumentType,
    conversion ?: (value:ArgumentType) => string
) : Invalid<ArgumentType>;

export default function Valid<
    ArgumentType extends Validatable = Validatable
>(
    validatable : ArgumentType|Argument<ArgumentType>,
    conversion : (value:ArgumentType)=>string = value => typeof value
) : Invalid<ArgumentType> {

    if(arguments.length === 1) {

        ({conversion, validatable} = validatable as Required<Argument<ArgumentType>>)
    }

    return new Invalid(validatable as ArgumentType, ValidType(validatable as ArgumentType, conversion));
}
