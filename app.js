"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 6));
// console.log(add('1','6'))
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
    console.log(add(true, false));
});
