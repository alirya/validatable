import ValidType from "../string/valid-parameters";
import Validatable from "../../validatable";
import Invalid, {InvalidParameterType} from "../../error/invalid-parameters";

export default function ValidParameters<
    ArgumentType extends Validatable = Validatable
>(
    validatable : ArgumentType,
    conversion : (value:ArgumentType)=>string = value => typeof value
) : InvalidParameterType<ArgumentType> {

    return new Invalid(validatable as ArgumentType, ValidType(validatable as ArgumentType, conversion));
}

