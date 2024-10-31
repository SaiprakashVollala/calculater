let displayValue = '0';

function updateDisplay() {
  if(displayValue.length<=15){
  document.getElementById('display').textContent = displayValue;
  }
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1) || '0';
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString();
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDot() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function appendOperator(operator) {
  const lastChar = displayValue[displayValue.length - 1];
  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayValue = displayValue.slice(0, -1) + operator;
  } else {
    displayValue += operator;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/')).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
