import Validatable from '../validatable';
import ThrowableValid from './error/valid-parameters';
import BooleanValid from '../boolean/valid';
import Callback from '@alirya/function/assert/callback-parameters';

/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (validatable:Argument)=>Error = ThrowableValid
) : asserts value is Assumption {

    Callback(value, BooleanValid, error);
}
