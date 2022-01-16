import Validatable from "./validatable";
import Validation from "@alirya/boolean/validation/validation";

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
