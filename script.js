let displayValue = 0;

let displaySelector = document.querySelector(".display");
displaySelector.innerHTML = displayValue;

let cleardisplaySelector = document
  .querySelector(".c")
  .addEventListener("click", clearDisplay);

let numberButtons = document.querySelectorAll("[data-btn]");
console.log(numberButtons);

let keySelectlisten = document
  .querySelector("body")
  .addEventListener("keydown", (e) => {
    switch (e.key) {
      case "1":
        console.log("yay");
        displaySelector.innerHTML += numberButtons[1].value;
        break;
      case "2":
        console.log("two");
        displaySelector.innerHTML += numberButtons[2].value;

        break;
      case "3":
        console.log("three");
        displaySelector.innerHTML += numberButtons[3].value;

        break;
      case "4":
        console.log("four");
        displaySelector.innerHTML += numberButtons[4].value;

        break;
      case "5":
        console.log("five");
        displaySelector.innerHTML += numberButtons[5].value;

        break;
      case "6":
        console.log("six");
        displaySelector.innerHTML += numberButtons[6].value;

        break;
      case "7":
        console.log("seven");
        displaySelector.innerHTML += numberButtons[7].value;

        break;
      case "8":
        displaySelector.innerHTML += numberButtons[8].value;

        console.log("eight");
        break;
      case "9":
        displaySelector.innerHTML += numberButtons[9].value;

        console.log("nine");
        break;
      case "Enter":
        console.log("enter");

        break;
      case "/":
        console.log("divide");
        break;
      case "*":
        console.log("multiply");
        break;
      case "Backspace":
        console.log("delete");
        clearDisplay();
        break;
    }
  });
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};
const factorial = function (number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr.reduce((a, b) => a * b);
  }
};
function operate(operator, num1, num2) {}

function clearDisplay() {
  if (displaySelector.innerHTML.length > 1) {
    displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -1);
  } else if (displaySelector.innerHTML.length == 1) {
    displaySelector.innerHTML = 0;
  }
}
