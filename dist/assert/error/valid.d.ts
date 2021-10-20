import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Validator from "../../error/validator";
/**
 * assert if {@see Validatable} is valid
 *
 * @param validatable
 * @param conversion
 */
export default function Valid<Argument extends Validatable = Validatable>({ validatable, conversion, }: ValidatableContainer<Argument> & {
    conversion?: (value: Argument) => string;
}): Validator<Argument>;
