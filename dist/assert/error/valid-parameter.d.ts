import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";
export declare type ValidParameterArgument<Argument extends Validatable> = ValidatableContainer<Argument> & {
    conversion?: (value: Argument) => string;
};
/**
 * assert if {@see Validatable} is valid
 */
export default function ValidParameter<ArgumentType extends Validatable = Validatable>({ validatable, conversion }: ValidParameterArgument<ArgumentType>): Invalid.Type<ArgumentType>;
