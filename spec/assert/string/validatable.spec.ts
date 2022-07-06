import {ValidatableParameter} from '../../../dist/assert/string/validatable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(ValidatableParameter({valid:true, value:{}, subject:'value'})).toBe(
        'value "Object" is compatible with Validatable type.'
    );

});

it('false valid', ()=>{

    expect(ValidatableParameter({valid :false, value:{message:1}, subject:'value'})).toBe(
        'value "Object" is not compatible with Validatable type.'
    );

});
