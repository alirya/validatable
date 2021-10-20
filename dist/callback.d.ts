import Validatable from "./validatable";
import Validation from "@dikac/t-boolean/validation/validation";
/**
 * create validatable from callback
 */
export default class Callback<Return extends boolean> implements Readonly<Validatable<Return>>, Validation<[], Return> {
    readonly validation: () => Return;
    constructor(validation: () => Return);
    get valid(): Return;
}
