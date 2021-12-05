import Validatable from "../../validatable";
import ValidatableContainer from "../../validatable/validatable";
export declare type Argument<ValidatableType extends Validatable> = ValidatableContainer<ValidatableType> & {
    conversion?: (object: ValidatableType) => string;
};
export default function ValidParameter<ValidatableType extends Validatable>({ validatable, conversion }: Argument<ValidatableType>): string;
