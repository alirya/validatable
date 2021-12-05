import Validatable from "../../validatable";
export default function ValidParameters<ValidatableType extends Validatable>(validatable: ValidatableType, conversion?: (object: ValidatableType) => string): string;
