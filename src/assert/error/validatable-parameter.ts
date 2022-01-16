import Value from '@alirya/value/value';
import ValidatableParameters from './validatable-parameters';


export default function ValidatableParameter({value, subject} : Value<object> & {subject ?: string}) : Error {

    return ValidatableParameters(value, subject);
}


