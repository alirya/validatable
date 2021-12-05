import Guard from "../../dist/ensure/validatable";
import Type from "../../dist/boolean/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    it("class", () =>{

        let value = {valid:true};
        let guarded = Guard.Parameter({value});

        expect(Type(guarded)).toBeTrue()
    });

    it("object", () => {

        let value = { valid : true};
        let guarded = Guard.Parameter({value});

        expect(Type(guarded)).toBeTrue()
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        let value = new Getter;

        let guarded = Guard.Parameter({value});

        expect(Type(guarded)).toBeTrue()
    });


    it("getter + setter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        let value = new Getter;

        let guarded = Guard.Parameter({value});

        expect(Type(guarded)).toBeTrue()
    });

    it("plain object", () => {

        let value = { valid :  true};

        let guarded = Guard.Parameter({value});

        expect(Type(guarded)).toBeTrue()
    });

});



describe("invalid", function() {

    it("class", () => {

        let value = new String('a');

        try {

            Guard.Parameter({value});
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it("setter", () => {

        class Setter {
            set valid (value : boolean)  {

            }
        }

        let value = new Setter;

        try {

            Guard.Parameter({value});
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
