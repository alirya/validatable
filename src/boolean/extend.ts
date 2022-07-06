import Validatable from '../validatable.js';
import Infer from './infer.js';

export type Extend<ValidatableType extends Validatable, Elevate extends Infer<ValidatableType>> = {
    [Key in keyof ValidatableType]: Key extends 'valid' ? Elevate : ValidatableType[Key];
};

export default Extend;
