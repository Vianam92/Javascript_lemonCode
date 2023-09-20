import "./style.css";

let counter: number = 0;

const paintNumber = () => {
  const elementTitle = document.querySelector(".numero-turno");
  if (elementTitle !== null && elementTitle !== undefined && elementTitle instanceof HTMLHeadingElement) {
    elementTitle.textContent = counter.toString().padStart(2, "0");
  }else{
    console.error("No se encuentra el title");
  }
};

const restCounter = () => {
  if (counter > 0) counter--;
  paintNumber();
};

const addCounter = () => {
  counter++;
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
  }else{
    console.error("No se encuentra el texto");
  }
};

const events = () => {
  const buttonAtras = document.querySelector(".atras");
  const resetButton = document.querySelector(".reset");
  const buttonAdelante = document.querySelector(".adelante");
  const sendElement = document.querySelector(".send");
  if (buttonAtras !== null && buttonAtras !== undefined && buttonAtras instanceof HTMLButtonElement) {
    buttonAtras.addEventListener("click", restCounter);
  }else{
    console.error("No se encuentra el elemento button");
  }
  if (buttonAdelante !== null && buttonAdelante !== undefined && buttonAdelante instanceof HTMLButtonElement) {
    buttonAdelante.addEventListener("click", addCounter);
  }else{
    console.error("No se encuentra el elemento button");
  }
  if (resetButton !== null && resetButton !== undefined && resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", resetCounter);
  }else{
    console.error("No se encuentra el elemento button");
  }
  if (sendElement !== null && sendElement !== undefined && sendElement instanceof HTMLButtonElement) {
    sendElement.addEventListener("click", sendValueButton);
  }else{
    console.error("No se encuentra el elemento button");
  }
};

addEventListener("DOMContentLoaded", events);
paintNumber();
