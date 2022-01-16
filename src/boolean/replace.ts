import Validatable from '../validatable';

export type Replace<ValidatableType extends Validatable, Replace extends boolean> = {
    [Key in keyof ValidatableType]: Key extends 'valid' ? Replace : ValidatableType[Key];
};

export default Replace;
