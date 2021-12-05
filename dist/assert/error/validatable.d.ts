import ValidatableParameter from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";
declare namespace Validatable {
    const Parameter: typeof ValidatableParameter;
    const Parameters: typeof ValidatableParameters;
}
export default Validatable;
