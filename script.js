let displayValue = 0;

let displaySelector = document.querySelector(".display");
displaySelector.innerHTML = displayValue;

let cleardisplaySelector = document
  .querySelector(".c")
  .addEventListener("click", clearDisplay);
let clearEverythingSelector = document
  .querySelector(".ce")
  .addEventListener("click", clearEverything);

let numberButtons = document.querySelectorAll("[data-btn]");
let mathOperators = document.querySelectorAll("[data-op]");

numberButtons.forEach((numberBox) => {
  numberBox.addEventListener("click", (e) => updateValue(e.target.value));
});

function updateValue(input) {
  if (displaySelector.innerHTML > 0) {
    return (displaySelector.innerHTML += numberButtons[input].value);
  } else {
    try {
      return (displaySelector.innerHTML = numberButtons[input].value);
    } catch (error) {
      console.log("Invalid key press");
    }
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

function operate(operator, num1, num2) {}

function clearDisplay() {
  if (displaySelector.innerHTML.length > 1) {
    displaySelector.innerHTML = displaySelector.innerHTML.slice(0, -1);
  } else if (displaySelector.innerHTML.length == 1) {
    displaySelector.innerHTML = 0;
  }
}
function clearEverything() {
  displaySelector.innerHTML = 0;
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Tab" || e.key === "Spacebar") {
    e.preventDefault();
  }
});
