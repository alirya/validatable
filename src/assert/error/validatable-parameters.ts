import ValidatableMessage from "../string/validatable-parameters";

export default function ValidatableParameters(
    value : object,
    subject ?: string
) : Error {

    return new Error(ValidatableMessage(false, value, subject));
}

