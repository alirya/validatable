/**
 * create validatable from callback
 */
export default class Callback {
    constructor(validation) {
        this.validation = validation;
    }
    get valid() {
        return this.validation();
    }
}
//# sourceMappingURL=callback.js.map