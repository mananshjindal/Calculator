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
  return a / b;
}
let num1;
let num2;
let operand;
function operation(num1, num2, operand) {
  if (operand == "+") {
    add(num1, num2);
  }
  if (operand == "-") {
    subtract(num1, num2);
  }
  if (operand == "*") {
    multiply(num1, num2);
  }
  if (operand == "/") {
    divide(num1, num2);
  }
}
const buttons = document.querySelectorAll(".buttons");
buttons.addEventListener("click", () => {});
