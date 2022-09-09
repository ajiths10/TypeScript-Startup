const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(num1: any, num2: any) {
  return num1 + num2;
}

console.log(add(1, 6));
// console.log(add('1','6'))

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  console.log(result);
  console.log(stringResult);
  console.log(add(true, false));
});
