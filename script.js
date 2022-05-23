let displayValue = 0;

let displaySelector = document.querySelector(".display");
displaySelector.innerHTML = displayValue;

let cleardisplaySelector = document
  .querySelector(".c")
  .addEventListener("click", clearDisplay);

let numberButtons = document.querySelectorAll("[data-btn]");

numberButtons.forEach((numberBox) => {
  numberBox.addEventListener("click", (e) => updateValue(e.target.value));
});

function updateValue(input) {
  if (displaySelector.innerHTML > 0) {
    console.log(displaySelector.innerHTML.length);
    return (displaySelector.innerHTML += numberButtons[input].value);
  } else {
    return (displaySelector.innerHTML = numberButtons[input].value);
  }
}
let keySelectlisten = document
  .querySelector("body")
  .addEventListener("keydown", (e) => {
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
