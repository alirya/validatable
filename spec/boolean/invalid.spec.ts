import Invalid from '../../dist/boolean/invalid.js';
import Validatable from '../../dist/validatable.js';
import Value from '@axiona/value/value.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function () {

    const argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    };

    if(Invalid(argument)) {

        const valid : false = argument.valid;

        // @ts-expect-error
        const invalid : true = argument.valid;

        const boolean : boolean = argument.valid;

    } else {

        const value : boolean = argument.valid;
    }
});

it('valid', ()=>{

    const argument : Validatable & Value<string> = {
        valid : false,
        value : 'string'
    };

    expect(Invalid(argument)).toBeTrue();
});


it('invalid', ()=>{

    const argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    };

    expect(Invalid(argument)).toBeFalse();
});
