import {ValidatableParameter} from '../../dist/ensure/validatable.js';
import Type from '../../dist/boolean/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('valid', function() {

    it('class', () =>{

        const value = {valid:true};
        const guarded = ValidatableParameter({value});

        expect(Type(guarded)).toBeTrue();
    });

    it('object', () => {

        const value = { valid : true};
        const guarded = ValidatableParameter({value});

        expect(Type(guarded)).toBeTrue();
    });

    it('getter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        const value = new Getter;

        const guarded = ValidatableParameter({value});

        expect(Type(guarded)).toBeTrue();
    });


    it('getter + setter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        const value = new Getter;

        const guarded = ValidatableParameter({value});

        expect(Type(guarded)).toBeTrue();
    });

    it('plain object', () => {

        const value = { valid :  true};

        const guarded = ValidatableParameter({value});

        expect(Type(guarded)).toBeTrue();
    });

});



describe('invalid', function() {

    it('class', () => {

        const value = new String('a');

        try {

            ValidatableParameter({value});
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('setter', () => {

        class Setter {
            set valid (value : boolean)  {

            }
        }

        const value = new Setter;

        try {

            ValidatableParameter({value});
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
