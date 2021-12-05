import ValidatableParameters from "./validatable-parameters";
import { ValidatableParameter } from "./validatable-parameter";
declare namespace Validatable {
    const Parameters: typeof ValidatableParameters;
    const Parameter: typeof ValidatableParameter;
}
export default Validatable;
