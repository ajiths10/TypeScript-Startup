const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: number[] = [];
const textResults: string[] = [];

type NumorString = number | string;
type result = { val: number; timestamp: Date }

interface ResultObj {
    val: number; 
    timestamp: Date
}

function add(num1: NumorString, num2: NumorString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
}

function printRsults(resultObj: ResultObj) {
  console.log(resultObj);
}

console.log(add(1, 6));
// console.log(add('1','6'))

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);
  console.log(result);
  console.log(stringResult);
  //console.log(add(true, false));
  printRsults({ val: result as number, timestamp: new Date() });

  console.log(numResults, textResults);
});

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
})

myPromise.then((result ) => {
    console.log('promiseResponse',result )
})