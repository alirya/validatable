import ValidType from "../string/valid";
import Validator from "../../error/validator";
/**
 * assert if {@see Validatable} is valid
 *
 * @param validatable
 * @param conversion
 */
export default function Valid(validatable, conversion = value => typeof value) {
    return new Validator(validatable, ValidType(validatable, conversion));
}
//# sourceMappingURL=valid.js.map