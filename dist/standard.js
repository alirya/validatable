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
    /**
     * create {@link Validatable} from {@param valid}
     */
    function Standard(valid) {
        return { valid: valid };
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map