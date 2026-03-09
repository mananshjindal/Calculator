function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return "Error, Div by 0";
  }
  return a / b;
}
let num1 = "";
let num2 = "";
let operand = "";
function operation() {
  num1 = Number(num1);
  num2 = Number(num2);
  let result = "";
  if (operand == "+") {
    result = add(num1, num2);
  }
  if (operand == "-") {
    result = subtract(num1, num2);
  }
  if (operand == "*") {
    result = multiply(num1, num2);
  }
  if (operand == "/") {
    result = divide(num1, num2);
  }
  display.textContent = result;
  num1 = result;
  num2 = "";
  operand = "";
}
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (e) => assignVar(e));

function assignVar(e) {
  if (!e.target.matches("button")) {
    return;
  }
  if (!isNaN(e.target.textContent)) {
    if (operand == "") {
      num1 += e.target.textContent;
      display.textContent = num1;
    } else {
      num2 += e.target.textContent;
      display.textContent = num2;
    }
  } else if (e.target.classList.contains("operator")) {
    if (num2 != "") {
      operation();
    }
    operand = e.target.textContent;
  } else if (e.target.textContent == "C") {
    num1 = "";
    num2 = "";
    operand = "";
    display.textContent = "";
  } else if (e.target.textContent == "=") {
    operation();
  }
}
