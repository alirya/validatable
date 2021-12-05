import ValidParameter from "./valid-parameter";
import ValidParameters from "./valid-parameters";
var Valid;
(function (Valid) {
    Valid.Parameter = ValidParameter;
    Valid.Parameters = ValidParameters;
})(Valid || (Valid = {}));
// export type Argument<Argument extends Validatable> =
//     ValidatableContainer<Argument> &
//     {conversion?: (value: Argument) => string}
//
// /**
//  * assert if {@see Validatable} is valid
//  */
// export function ValidObject<
//     ArgumentType extends Validatable = Validatable
// >({validatable, conversion} : Argument<ArgumentType>) : Invalid.Type<ArgumentType> {
//
//     return ValidParameter(validatable, conversion)
// }
//
// export function ValidParameter<
//     ArgumentType extends Validatable = Validatable
// >(
//     validatable : ArgumentType,
//     conversion : (value:ArgumentType)=>string = value => typeof value
// ) : Invalid.Type<ArgumentType> {
//
//     return new Invalid.Parameter(validatable as ArgumentType, ValidType.Parameter(validatable as ArgumentType, conversion));
// }
//
export default Valid;
//# sourceMappingURL=valid.js.map