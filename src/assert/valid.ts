import Validatable from '../validatable.js';
import ThrowableValid from './error/valid.js';
import BooleanValid from '../boolean/valid.js';
import Callback from '@axiona/function/assert/callback.js';

/**
 * Throw exception if {@link ValidatableInterface} is not valid (return false)
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (validatable:Argument)=>Error = ThrowableValid.Parameters
) : asserts value is Assumption {

    Callback.Parameters(value, BooleanValid, error);
}
