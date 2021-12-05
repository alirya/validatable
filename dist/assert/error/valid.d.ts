import Validatable from "../../validatable";
import ValidParameter, { ValidParameterArgument } from "./valid-parameter";
import ValidParameters from "./valid-parameters";
declare namespace Valid {
    const Parameter: typeof ValidParameter;
    const Parameters: typeof ValidParameters;
    type Argument<Argument extends Validatable> = ValidParameterArgument<Argument>;
}
export default Valid;
