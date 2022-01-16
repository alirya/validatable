import Validatable from '../validatable';
export default interface Validation<FunctionType extends (...args:unknown[])=>Validatable> {
    validation : FunctionType;
}
