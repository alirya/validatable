import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
declare namespace Valid {
    const Parameter: typeof ValidParameter;
    const Object: typeof ValidObject;
}
export declare type Argument<ValidatableType extends Validatable> = ValidatableContainer<ValidatableType> & {
    conversion?: (object: ValidatableType) => string;
};
export declare function ValidObject<ValidatableType extends Validatable>({ validatable, conversion }: Argument<ValidatableType>): string;
export declare function ValidParameter<ValidatableType extends Validatable>(validatable: ValidatableType, conversion?: (object: ValidatableType) => string): string;
export default Valid;
