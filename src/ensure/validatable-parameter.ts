import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValidatableParameters from "./validatable-parameters";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function ValidatableParameter({value, error} : Value<object> & {error?:(value:object)=>Error}) : Validatable {

    return ValidatableParameters(value, error);
}
