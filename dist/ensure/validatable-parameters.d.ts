import Validatable from "../validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function ValidatableParameters(value: object, error?: (value: object) => Error): Validatable;
