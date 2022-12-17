import camelCase from './camelCase.js';

test("Converts `string` to camel case", () => {

    
    expect(camelCase('Foo Bar')).toBe(' fooBar');


   
})