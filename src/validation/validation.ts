import Validatable from '../validatable.js';
export default interface Validation<FunctionType extends (...args:unknown[])=>Validatable> {
    validation : FunctionType;
}
