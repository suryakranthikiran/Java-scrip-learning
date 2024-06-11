let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function turnOnRed() {
  stopLight.style.backgroundColor = "#cf1124";
  stopButton.style.backgroundColor = "#cf1124";
  readyLight.style.backgroundColor = "#4b5069";
  readyButton.style.backgroundColor = "#1f1d41";
}
function turnOnYellow() {
  readyLight.style.backgroundColor = "#f7c948";
  readyButton.style.backgroundColor = "#f7c948";
  stopLight.style.backgroundColor = "#4b5069";
  stopButton.style.backgroundColor = "#1f1d41";
  goLight.style.backgroundColor = "#4b5069";
  goButton.style.backgroundColor = "#1f1d41";
}
function turnOnGreen() {
  goLight.style.backgroundColor = "#199473";
  goButton.style.backgroundColor = "#199473";
  readyLight.style.backgroundColor = "#4b5069";
  readyButton.style.backgroundColor = "#1f1d41";
}
