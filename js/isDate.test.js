import isDate from './isDate';

test("Checks if `value` is classified as a `Date` object.", () => {

    
    expect(isDate('Mon April 23 2012')).toBe(false);
    

   
})