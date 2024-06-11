// Counter java script using functions
let counterElement = document.getElementById("counterElement");

function btnDec() {
  let preValue = counterElement.textContent;

  let updateVal = parseInt(preValue) - 1;

  counterElement.textContent = updateVal;
}

function btnInc() {
  let preValue = counterElement.textContent;

  let updateVal = parseInt(preValue) + 1;

  counterElement.textContent = updateVal;
}
function btnRes() {
  counterElement.textContent = 0;
}
