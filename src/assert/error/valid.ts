import ValidType from '../string/valid';
import Validatable from '../../validatable';
import Invalid, {InvalidParameterType} from '../../error/invalid';
import ValidatableContainer from '../../validatable/validatable';

export function ValidParameters<
    ArgumentType extends Validatable = Validatable
>(
    validatable : ArgumentType,
    conversion : (value:ArgumentType)=>string = value => typeof value
) : InvalidParameterType<ArgumentType> {

    return new Invalid.Parameters(validatable as ArgumentType, ValidType.Parameters(validatable as ArgumentType, conversion));
}


export type ValidArgument<Argument extends Validatable> =
    ValidatableContainer<Argument> &
    {conversion?: (value: Argument) => string};

/**
 * assert if {@see Validatable} is valid
 */
export function ValidParameter<
    ArgumentType extends Validatable = Validatable
>({validatable, conversion} : ValidArgument<ArgumentType>) : InvalidParameterType<ArgumentType> {

    return ValidParameters(validatable, conversion);
}



namespace Valid {
    export const Parameters = ValidParameters;
    export const Parameter = ValidParameter;
    export type Argument<Argument extends Validatable> = ValidArgument<Argument>;
}
export default Valid;
