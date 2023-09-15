import "./style.css";

let counter: number = 0;

const paintNumber = () => {
  const elementh1 = document.querySelector(".numero-turno");
  if (elementh1 !== null && elementh1 !== undefined) {
    elementh1.textContent = counter.toString().padStart(2, "0");
  }
};

const restCounter = () => {
  if (counter > 0) counter = counter - 1;
  paintNumber();
};

const aumentCounter = () => {
  counter = counter + 1;
  paintNumber();
};

const resetCounter = () => {
  counter = 0;
  paintNumber();
};

const sendValueButton = () => {
  let boxElement = document.querySelector(".box");
  if (boxElement !== null && boxElement !== undefined && boxElement instanceof HTMLInputElement) {
      counter = parseInt(boxElement.value);
      paintNumber();
      boxElement.value = "";
  }
};

const events = () => {
  const buttonAtras = document.querySelector(".atras");
  const resetButton = document.querySelector(".reset");
  const buttonAdelante = document.querySelector(".adelante");
  const sendElement = document.querySelector(".send") as HTMLButtonElement;
  if (buttonAtras !== null && buttonAtras !== undefined) {
    buttonAtras.addEventListener("click", restCounter);
  }
  if (buttonAdelante !== null && buttonAdelante !== undefined) {
    buttonAdelante.addEventListener("click", aumentCounter);
  }
  if (resetButton !== null && resetButton !== undefined) {
    resetButton.addEventListener("click", resetCounter);
  }
  if (sendElement !== null && sendElement !== undefined) {
    sendElement.addEventListener("click", sendValueButton);
  }
};

paintNumber();
events();
