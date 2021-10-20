import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";

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
