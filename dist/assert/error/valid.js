import ValidType from "../string/valid";
import Invalid from "../../error/invalid";
export default function Valid(validatable, conversion = value => typeof value) {
    if (arguments.length === 1) {
        ({ conversion, validatable } = validatable);
    }
    return new Invalid(validatable, ValidType(validatable, conversion));
}
//# sourceMappingURL=valid.js.map