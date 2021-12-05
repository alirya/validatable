import ValidatableType from "../../validatable";
import Value from "@dikac/t-value/value";
import ValidatableParameters from "./validatable-parameters";

export type Argument = ValidatableType & Value<object> & {subject ?: string};

export function ValidatableParameter({valid, value, subject} : Argument) : string {

    return ValidatableParameters(valid, value, subject);
}
