import Validatable from "../../validatable";
import { InvalidParameterType } from "../../error/invalid-parameters";
export default function ValidParameters<ArgumentType extends Validatable = Validatable>(validatable: ArgumentType, conversion?: (value: ArgumentType) => string): InvalidParameterType<ArgumentType>;
