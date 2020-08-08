(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/boolean"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const boolean_1 = require("@dikac/t-boolean/boolean");
    /**
     * check if {@param value} is compatible to {@link Validatable} type
     */
    function Validatable(value) {
        if (boolean_1.default(value.valid)) {
            return true;
        }
        return false;
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map