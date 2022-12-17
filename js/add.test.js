import add from './add.js';
test("add(1, 1)", () => {
    let augend = 1;
    let addend = 1;
    expect(add(augend, addend)).toEqual(2);
  });