import Validatable from '../../dist/assert/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

class Test {
    constructor(public valid : boolean) {
    }
}

describe('valid', function() {

    it('class', () =>{

        const data = new Test(true);
        expect(Validatable(data)).toBeUndefined();
    });

    it('object', () => {

        const object = { valid : true};
        expect(Validatable(object)).toBeUndefined();
    });

    it('getter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        const data = new Getter;

        expect(Validatable(data)).toBeUndefined();
    });


    it('getter + setter', () => {

        class GetterSetter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        expect(Validatable(new GetterSetter)).toBeUndefined();
    });
});



describe('invalid', function() {

    it('class', () => {

        const data = new String('a');

        try {

            Validatable(data);
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

        const data = new Setter;

        try {

            Validatable(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
