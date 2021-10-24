import Valid from "../../../dist/assert/string/valid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(Valid.Object({validatable :{valid:true}})).toBe(
        'Object is valid.'
    );

});

it('false valid', ()=>{

    expect(Valid.Object({validatable :{valid:false}})).toBe(
        'Object is not valid.'
    );

});
