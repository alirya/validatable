import Valid from '../../dist/assert/valid.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

class Test {
    constructor(public valid : boolean) {
    }
}

describe('valid', function() {

    it('class', () =>{

        const validatable = new Test(true);
        expect(Valid(validatable)).toBeUndefined();
    });

    it('object', () => {

        const object = { valid : true};
        expect(Valid(object)).toBeUndefined();
    });

    it('getter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        const data = new Getter;

        expect(Valid(data)).toBeUndefined();
    });


    it('getter + setter', () => {

        class GetterSetter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        const data = new GetterSetter();
        expect(Valid(data)).toBeUndefined();
    });

});


describe('invalid', function() {

    it('class', () =>{

        const validatable = new Test(false);

        try {

            Valid(validatable);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('object', () => {

        const object = { valid : false};

        try {

            Valid(object);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it('getter', () => {

        class Getter {
            get valid () : boolean {
                return false;
            }
        }
        const data = new Getter;

        try {

            Valid(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });


    it('getter + setter', () => {

        class GetterSetter {
            get valid () : boolean {
                return false;
            }
            set valid (value : boolean)  {
            }
        }

        const data = new GetterSetter();

        try {

            Valid(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
