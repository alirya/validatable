import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
export default Validatable;
declare namespace Validatable {
    const Parameter: typeof ValidatableParameter;
    const Object: typeof ValidatableObject;
}
export declare type Argument = ValidatableType & Value<object> & {
    subject?: string;
};
export declare function ValidatableObject({ valid, value, subject }: Argument): string;
/**
 *
 * @param valid
 * @param value
 * @param subject
 */
export declare function ValidatableParameter(valid: boolean, value: object, subject?: string): string;
