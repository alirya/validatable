import Validatable from "../../../dist/assert/string/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(Validatable.Object({valid:true, value:{}, subject:'value'})).toBe(
        'value "Object" is compatible with Validatable type.'
    );

});

it('false valid', ()=>{

    expect(Validatable.Object({valid :false, value:{message:1}, subject:'value'})).toBe(
        'value "Object" is not compatible with Validatable type.'
    );

});
