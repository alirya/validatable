import Type from '../../dist/boolean/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('valid', function() {


    it('class', () =>{

        const data = {valid:true};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            const type : boolean = data.valid; // compiler pass
        }
    });

    it('object', () => {

        const data = { valid : true};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            const type : boolean = data.valid; // compiler pass
        }
    });

    it('getter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        const data = new Getter;

        expect(Type(data)).toBeTrue();


        if(Type(data)) {

            const type : boolean = data.valid; // compiler pass
        }
    });


    it('getter + setter', () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        const data = new Getter;

        expect(Type(data)).toBeTrue();


        if(Type(data)) {

            const type : boolean = data.valid; // compiler pass
        }
    });

    it('plain object', () => {

        const data = { valid :  true};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            const type : boolean = data.valid; // compiler pass
        }
    });

});



describe('invalid', function() {

    it('class', () => {

        const data = new String('a');
        expect(Type(data)).toBeFalse();

    });

    it('setter', () => {

        class Setter {
            set valid (value : boolean)  {

            }
        }

        const data = new Setter;

        expect(Type(data)).toBeFalse();
    });

});
