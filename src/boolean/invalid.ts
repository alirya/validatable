import Validatable from '../validatable.js';

export default function Invalid<Assumption extends Validatable>(validatable : Assumption) : validatable is Validatable<false> & Assumption {

    return !validatable.valid;
}
