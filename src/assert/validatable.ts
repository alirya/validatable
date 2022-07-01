import ValidatableType from '../boolean/validatable';
import ThrowableType from './error/validatable';
import Validatable from '../validatable';
import Callback from '@alirya/function/assert/callback';

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Validatable(
    value : object,
    errorFactory : (value:object)=>Error = ThrowableType.Parameters
) : asserts value is Validatable {

    Callback.Parameters(value, ValidatableType, errorFactory);
}
