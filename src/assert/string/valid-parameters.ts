import Name from '@alirya/object/string/name';
import Validatable from '../../validatable';

export default function ValidParameters<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    conversion : (object : ValidatableType) => string = Name,
) : string {

    const message : string[] = [];

    message.push(conversion(validatable).trim());

    if((validatable).valid) {

        message.push('is');

    } else {

        message.push('is not');
    }

    message.push('valid.');

    return message.join(' ');
}



