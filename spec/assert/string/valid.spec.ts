import Valid from "../../../dist/assert/string/valid-parameter";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(Valid({validatable :{valid:true}})).toBe(
        'Object is valid.'
    );

});

it('false valid', ()=>{

    expect(Valid({validatable :{valid:false}})).toBe(
        'Object is not valid.'
    );

});
