import ValidatableMessage from "../string/validatable";
import Value from "@dikac/t-value/value";

export default function Validatable({
    value,
    subject = ''
} : Value<object> & {subject ?: string}) : Error {

    return new Error(ValidatableMessage({valid:false, value, subject}));
}
