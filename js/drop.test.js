import drop from './drop.js';

test("Creates a slice of `array` with `n` elements dropped from the beginning.", () => {

    
    expect(drop([1, 2, 3])).toBe [2, 3];
    

   
})