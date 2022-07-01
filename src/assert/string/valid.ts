import Name from '@alirya/object/string/name';
import Validatable from '../../validatable';
import ValidatableContainer from '../../validatable/validatable';

export function ValidParameters<ValidatableType extends Validatable>(
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



export type ValidArgument<ValidatableType extends Validatable> =
    ValidatableContainer<ValidatableType> &
    {conversion?:(object : ValidatableType) => string};

export function ValidParameter<ValidatableType extends Validatable>(
    {validatable, conversion} : ValidArgument<ValidatableType>
) : string {

    return ValidParameters(validatable, conversion);
}




namespace Valid {
    export const Parameters = ValidParameters;
    export const Parameter = ValidParameter;
    export type Argument<ValidatableType extends Validatable>  = ValidArgument<ValidatableType>;
}
export default Valid;
