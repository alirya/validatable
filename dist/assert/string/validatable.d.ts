import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Validatable({ valid, value, subject, }: ValidatableType & Value<object> & {
    subject?: string;
}): string;
