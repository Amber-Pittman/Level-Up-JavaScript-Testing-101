import { add, subtract }from "./App";

// test("Fake test", () => {
//     // assertion
//     expect(true).toBeTruthy();
// });

console.log(add(1, 2));

test("add", () => {
    const value = add(1,2);
    // assertion
    expect(value).toBe(3);
});

test("subtract", () => {
    const value = subtract(5,3);
    // assertion
    expect(value).toBe(2);
});