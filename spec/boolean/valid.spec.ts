import Valid from '../../dist/boolean/valid.js';
import Validatable from '../../dist/validatable.js';
import Value from '@alirya/value/value.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function () {

    const argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    };

    if(Valid(argument)) {

        const valid : true = argument.valid;

        // @ts-expect-error
        const invalid : false = argument.valid;

        const boolean : boolean = argument.valid;

    } else {

        const value : boolean = argument.valid;
    }
});

it('valid', ()=>{

    const argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    };

    expect(Valid(argument)).toBeTrue();
});


it('invalid', ()=>{

    const argument : Validatable & Value<string> = {
        valid : false,
        value : 'string'
    };

    expect(Valid(argument)).toBeFalse();
});
