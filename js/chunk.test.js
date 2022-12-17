import chunk from './chunk.js';

test("Creates an array of elements split into groups the length of `size`.", () => {

    
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual[['a', 'b', 'c'], ['d']];


   
})