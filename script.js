const displayValue = 0;
const historyValue = "";

let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result;
let displaySelector = document.querySelector(".display");
let historySelector = document.querySelector(".displayhistory");

displaySelector.innerHTML = displayValue;
historySelector.innerHTML = historyValue;

let cleardisplaySelector = document
  .querySelector(".c")
  .addEventListener("click", backSpace);
let clearEverythingSelector = document
  .querySelector(".ce")
  .addEventListener("click", clearEverything);

let dotAdder = document.querySelector(".dot").addEventListener("click", (e) => {
  if (!displaySelector.innerHTML.includes(".")) {
    displaySelector.innerHTML += ".";
  }
});

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
      firstOperand = displaySelector.innerHTML.replace("=", "");

      updateHistory(firstOperand, firstOperator);
      clearDisplay();
    } else if (secondOperator === null) {
      secondOperand = displaySelector.innerHTML.replace("=", "");
      secondOperator = e.target.value;
      updateHistory(secondOperand, secondOperator);
      result = operate(
        Number(firstOperand),
        Number(secondOperand),
        firstOperator
      );
      if (firstOperand.includes(".") || secondOperand.includes(".")) {
        displaySelector.innerHTML = parseFloat(result).toFixed(2);
      } else {
        displaySelector.innerHTML = `= ${result.toFixed(0)}`;
      }
      firstOperator = null;
      secondOperator = null;
      firstOperand = null;
      secondOperand = null;
    } else {
    }
  });
});
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
      if (firstOperand != 0 && secondOperand != 0) {
        return firstOperand / secondOperand;
      } else {
        alert("lmao");
        return 0;
      }

    default:
      break;
  }
}

function updateValue(input) {
  if (displaySelector.innerHTML.includes("=")) {
    displaySelector.innerHTML = input;
  } else if (displaySelector.innerHTML.length <= 1) {
    displaySelector.innerHTML = input;
  } else {
    displaySelector.innerHTML += input;
  }
}
function updateHistory(operand, operator) {
  if (historySelector.innerHTML.includes("=")) {
    historySelector.innerHTML = historySelector.innerHTML.replace("=", "");
  }
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
    for (i = 0; i <= numberButtons.length; i++) {
      if (e.key == i) {
        numberButtons[i].click();
      }
    }
    let operations = ["=", "+", "-", "*", "/", "%"];

    for (i = 0; i <= mathOperators.length; i++) {
      if (e.key == operations[i]) {
        mathOperators[i].click();
      }
    }
    if (e.key == "Backspace") {
      document.querySelector(".c").click();
    } else if (e.key == "Escape") {
      document.querySelector(".ce").click();
    } else if (e.key == "Enter") {
      console.log(e.key);
      document.querySelector("[data-op='=']").click();
    } else if (e.key == "." || e.key == ",") {
      console.log("no");
      document.querySelector("[data-dot]").click();
    }
  });

function backSpace() {
  displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -1);
}
function clearDisplay() {
  displaySelector.innerHTML = 0;
}
function clearEverything() {
  displaySelector.innerHTML = 0;
  currentNumber = displaySelector.innerHTML;
  historyNumber = [];
  historySelector.innerHTML = historyNumber;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
}
