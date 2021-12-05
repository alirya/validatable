import Value from "@dikac/t-value/value";
export default function ValidatableParameter({ value, subject }: Value<object> & {
    subject?: string;
}): Error;
