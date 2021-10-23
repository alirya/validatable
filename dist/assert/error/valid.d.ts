import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";
export declare type Argument<Argument extends Validatable> = ValidatableContainer<Argument> & {
    conversion?: (value: Argument) => string;
};
/**
 * assert if {@see Validatable} is valid
 *
 * @param validatable
 * @param conversion
 */
export default function Valid<ArgumentType extends Validatable = Validatable>({ validatable, conversion, }: Argument<ArgumentType>): Invalid<ArgumentType>;
export default function Valid<ArgumentType extends Validatable = Validatable>(validatable: ArgumentType, conversion?: (value: ArgumentType) => string): Invalid<ArgumentType>;
