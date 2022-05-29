const displayValue = 0;
const historyValue = "";

let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;

let displaySelector = document.querySelector(".display");
let historySelector = document.querySelector(".displayhistory");

displaySelector.innerHTML = firstOperand;
historySelector.innerHTML = historyValue;

let cleardisplaySelector = document
  .querySelector(".c")
  .addEventListener("click", clearDisplay);
let clearEverythingSelector = document
  .querySelector(".ce")
  .addEventListener("click", clearEverything);

let numberButtons = document.querySelectorAll("[data-btn]");
let mathOperators = document.querySelectorAll("[data-op]");
// let returnOperator = document.querySelector("[data-return]");

numberButtons.forEach((numberBox) => {
  numberBox.addEventListener("click", (e) => updateValue(e.target.value));
});

mathOperators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (firstOperator === null && secondOperator === null) {
      historySelector.innerHTML = null;

      firstOperator = e.target.value;
      console.log(firstOperator);
      firstOperand = displaySelector.innerHTML;
      console.log(firstOperand);
      updateHistory(firstOperand, firstOperator);
      clearDisplay();
    } else if (secondOperator === null) {
      secondOperand = displaySelector.innerHTML;
      secondOperator = e.target.value;
      updateHistory(secondOperand, secondOperator);
      let result = operate(
        Number(firstOperand),
        Number(secondOperand),
        firstOperator
      );
      displaySelector.innerHTML = result;
      firstOperator = null;
      secondOperator = null;
      firstOperand = null;
      secondOperand = null;
    } else {
    }
  });
});
function main(operator) {}

function operate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
      break;
    case "-":
      return firstOperand - secondOperand;
      break;
    case "*":
      return firstOperand * secondOperand;
      break;
    case "/":
      return firstOperand / secondOperand;

    default:
      break;
  }
}

function updateValue(input) {
  if (displaySelector.innerHTML > 0) {
    displaySelector.innerHTML += input;
  } else {
    {
      displaySelector.innerHTML = input;
    }
  }
}
function updateHistory(operand, operator) {
  if (historySelector.innerHTML == 0) {
    historySelector.innerHTML = operand + operator;
  } else if (historySelector.innerHTML.length > 0) {
    historySelector.innerHTML += operand;
  } else {
  }
}
let keySelectlisten = document
  .querySelector("body")
  .addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
      clearDisplay();
    }
    console.log(e.key);
    updateValue(e.key);
  });

function returnResult(operator, numArray) {}

function clearDisplay(number = 0) {
  // if (displaySelector.innerHTML.length > 1) {
  //   displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -1);
  //   currentNumber = displaySelector.innerHTML;
  // } else if (displaySelector.innerHTML.length == 1) {
  //   displaySelector.innerHTML = 0;
  //   currentNumber = displaySelector.innerHTML;
  // }
  displaySelector.innerHTML = 0;
}
function clearEverything() {
  displaySelector.innerHTML = 0;
  currentNumber = displaySelector.innerHTML;
  historyNumber = [];
  historySelector.innerHTML = historyNumber;
}
