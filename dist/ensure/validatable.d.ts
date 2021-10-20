import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable({ value, error, }: Value<object> & {
    error?: (value: object) => Error;
}): Validatable;
