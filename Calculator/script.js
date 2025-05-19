const display = document.getElementById('display');
let expression = '';

function updateDisplay() {
  display.textContent = expression || '0';
}

function appendNumber(num) {
  expression += num;
  updateDisplay();
}

function appendOperator(op) {
  if (expression === '') return;
  const lastChar = expression.slice(-1);
  if ('+-*/%'.includes(lastChar)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression.replace(/÷/g, '/').replace(/×/g, '*'));
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    display.textContent = 'Error';
    expression = '';
  }
}

updateDisplay();
