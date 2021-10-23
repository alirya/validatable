import ValidatableMessage from "../string/validatable";
import Value from "@dikac/t-value/value";

export default function Validatable({
    value,
    subject
} : Value<object> & {subject ?: string});

export default function Validatable(
    value : object,
    subject ?: string
);

export default function Validatable(
    value : object|(Value<object> & {subject ?: string}),
    subject : string = ''
) : Error {

    if(arguments.length === 1) {

        ({value, subject} = value as Value<object> & {subject : string})
    }

    return new Error(ValidatableMessage({valid:false, value, subject}));
}
