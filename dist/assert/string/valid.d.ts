import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
export default function Valid<ValidatableType extends Validatable>({ validatable, conversion, }: ValidatableContainer<ValidatableType> & {
    conversion?: (object: ValidatableType) => string;
}): string;
