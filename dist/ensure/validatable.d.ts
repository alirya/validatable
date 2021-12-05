import Validatable from "../validatable";
import { ValidatableParameter } from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
declare namespace Validatable {
    const Parameter: typeof ValidatableParameter;
    const Parameters: typeof ValidatableParameters;
}
export default Validatable;
