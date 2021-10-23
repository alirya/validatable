import AssertType from "../assert/validatable";
import ThrowableType from "../assert/error/validatable";
export default function Validatable(value, error = ThrowableType) {
    AssertType(value, error);
    return value;
}
//# sourceMappingURL=validatable.js.map