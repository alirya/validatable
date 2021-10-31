import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
import Invalid from "../../error/invalid";
declare namespace Valid {
    const Parameter: typeof ValidParameter;
    const Object: typeof ValidObject;
}
export declare type Argument<Argument extends Validatable> = ValidatableContainer<Argument> & {
    conversion?: (value: Argument) => string;
};
/**
 * assert if {@see Validatable} is valid
 */
export declare function ValidObject<ArgumentType extends Validatable = Validatable>({ validatable, conversion }: Argument<ArgumentType>): Invalid.Type<ArgumentType>;
export declare function ValidParameter<ArgumentType extends Validatable = Validatable>(validatable: ArgumentType, conversion?: (value: ArgumentType) => string): Invalid.Type<ArgumentType>;
export default Valid;
