import Validatable from '../validatable.js';
import TypeBoolean from '@alirya/boolean/boolean.js';

/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable(
    value : object
) : value is Validatable  {

    return TypeBoolean((value as Validatable).valid);
}


