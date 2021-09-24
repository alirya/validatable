import ValidatableInterface from "../validatable";

export default interface Validatable<ValidatableType extends ValidatableInterface> {

    validatable : ValidatableType
}
