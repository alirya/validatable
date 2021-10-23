import Value from "@dikac/t-value/value";
export default function Validatable(argument: Value<object> & {
    subject?: string;
}): any;
export default function Validatable(value: object, subject?: string): any;
