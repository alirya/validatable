import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default Validatable;
declare namespace Validatable {
    const Parameter: typeof ValidatableParameter;
    const Object: typeof ValidatableObject;
}
export declare function ValidatableParameter(value: object, error?: (value: object) => Error): Validatable;
export declare function ValidatableObject({ value, error }: Value<object> & {
    error?: (value: object) => Error;
}): Validatable;
