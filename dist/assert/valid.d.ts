import Validatable from "../validatable";
/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */
export default function Valid<Assumption extends Argument, Argument extends Validatable = Validatable>(value: Argument, error?: (value: Argument) => Error): asserts value is Assumption;
