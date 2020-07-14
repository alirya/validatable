(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../../boolean/string/validatable");
    function Validatable(value) {
        return new Error(validatable_1.default(value, false));
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map