import Validatable from '../validatable.js';

export default function Value<Bool extends boolean>(validatable : Validatable<Bool>) : Bool {

    return <Bool> validatable.valid;
}
