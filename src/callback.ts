import Validatable from './validatable.js';
import Validation from '@alirya/boolean/validation/validation.js';

/**
 * create validatable from callback
 */
export default class Callback<
    Return extends boolean,
> implements Readonly<Validatable<Return>>, Validation<[], Return>
{
    constructor(
        readonly validation : ()=>Return,
    ) {
    }

    get valid () : Return {

        return <Return> this.validation();
    }

}
