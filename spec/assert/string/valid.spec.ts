import {ValidParameter} from '../../../dist/assert/string/valid';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(ValidParameter({validatable :{valid:true}})).toBe(
        'Object is valid.'
    );

});

it('false valid', ()=>{

    expect(ValidParameter({validatable :{valid:false}})).toBe(
        'Object is not valid.'
    );

});
