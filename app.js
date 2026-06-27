const display = document.getElementById("display")

function appendToDisplay(input) {
  const operators = ['+', '-', '*', '/'];
  const last = display.value.slice(-1);
  if (operators.includes(input) && (display.value === '' || operators.includes(last))) return;
  if (input === '.' && last === '.') return;
  display.value += input;
}

function clearDisplay(){
    display.value="";


}

function calculate() {
  try {
    display.value = Function('"use strict"; return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
}
function backspace(){
    display.value = display.value.slice(0, -1);  

}
