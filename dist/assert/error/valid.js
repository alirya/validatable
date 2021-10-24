import ValidType from "../string/valid";
import Invalid from "../../error/invalid";
export default Valid;
var Valid;
(function (Valid) {
    Valid.Parameter = ValidParameter;
    Valid.Object = ValidObject;
})(Valid || (Valid = {}));
/**
 * assert if {@see Validatable} is valid
 */
export function ValidObject({ validatable, conversion }) {
    return ValidParameter(validatable, conversion);
}
export function ValidParameter(validatable, conversion = value => typeof value) {
    return new Invalid.Parameter(validatable, ValidType.Parameter(validatable, conversion));
}
//# sourceMappingURL=valid.js.map