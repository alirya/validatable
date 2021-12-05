import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
export declare type Argument = ValidatableType & Value<object> & {
    subject?: string;
};
export declare function ValidatableParameter({ valid, value, subject }: Argument): string;
