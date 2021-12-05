import Validatable from "../validatable";
import {ValidatableParameter} from "./validatable-parameter";
import ValidatableParameters from "./validatable-parameters";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */

namespace Validatable {

    export const Parameter = ValidatableParameter;
    export const Parameters = ValidatableParameters;
}


export default Validatable;
