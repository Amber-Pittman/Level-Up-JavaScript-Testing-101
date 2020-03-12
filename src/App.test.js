import { add, subtract } from "./App";

// test("Fake test", () => {
//     // assertion
//     expect(true).toBeTruthy();
// });

console.log(add(1, 2));


// Unit Test - it only tests one thing
// The add function is a unit
test("add", () => {
    // const value = add(1,2);
    // // assertion
    // expect(value).toBe(3);
    expect(add(1, 2)).toBe(3);
    expect(add(5, 2)).toBe(7);
});


// This is another unit test
test("subtract", () => {
    const value = subtract(5,3);
    // assertion
    expect(value).toBe(2);
    expect(subtract(8, 4)).toBe(4);
    expect(subtract(15, 9)).toBe(6);
});