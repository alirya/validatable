(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Validatable(value, valid) {
        let string = value.toString();
        if (valid) {
            return `value "${string}" is Validatable compatible`;
        }
        else {
            return `value "${string}" is not Validatable compatible`;
        }
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map