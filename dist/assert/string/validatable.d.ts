import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export declare type Argument = ValidatableType & Value<object> & {
    subject?: string;
};
export default function Validatable(argument: Argument): string;
export default function Validatable(valid: boolean, value: object, subject?: string): string;
