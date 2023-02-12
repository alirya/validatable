import ValidatableInterface from '../validatable.js';

export default interface Validatable<ValidatableType extends ValidatableInterface> {

    validatable : ValidatableType;
}
