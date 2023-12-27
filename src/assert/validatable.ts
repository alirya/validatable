import ValidatableType from '../boolean/validatable.js';
import ThrowableType from './error/validatable.js';
import Validatable from '../validatable.js';
import Callback from '@axiona/function/assert/callback.js';

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Validatable(
    value : object,
    errorFactory : (value:object)=>Error = ThrowableType.Parameters
) : asserts value is Validatable {

    Callback.Parameters(value, ValidatableType, errorFactory);
}
