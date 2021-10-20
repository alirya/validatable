import Value from "@dikac/t-value/value";
export default function Validatable({ value, subject }: Value<object> & {
    subject?: string;
}): Error;
