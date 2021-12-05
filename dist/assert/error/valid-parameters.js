import ValidType from "../string/valid-parameters";
import Invalid from "../../error/invalid-parameters";
export default function ValidParameters(validatable, conversion = value => typeof value) {
    return new Invalid(validatable, ValidType(validatable, conversion));
}
//# sourceMappingURL=valid-parameters.js.map