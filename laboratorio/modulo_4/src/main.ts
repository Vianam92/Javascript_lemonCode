import "./style.css";

const elementh1 = document.querySelector(".numero-turno") as HTMLHeadingElement;
let counter: number = 0;
const buttonAtras = document.querySelector(".atras") as HTMLButtonElement;
const buttonAdelante = document.querySelector(".adelante") as HTMLButtonElement;
const resetButton = document.querySelector(".reset") as HTMLButtonElement;
const sendElement = document.querySelector(".send") as HTMLButtonElement;
const boxElement = document.querySelector(".box") as HTMLInputElement;
let valueInput: string;
elementh1.innerHTML = counter.toString();

const restCounter = () => {
  if (counter > 0) {
    counter = counter - 1;
    elementh1.innerHTML = counter.toString().padStart(2, "0");
  }
  if(counter === 0) elementh1.innerHTML = counter.toString();
};

const aumentCounter = () => {
  counter = counter + 1;
  elementh1.innerHTML = counter.toString().padStart(2, "0");
};

const resetCounter = () => {
  counter = 0;
  elementh1.innerHTML = counter.toString();
};

const guardarValueBox = (event: Event) => {
  const value = event?.target as HTMLInputElement;
  valueInput = value.value;
};

const enviarValueBton = () => {
  elementh1.innerHTML = valueInput.padStart(2, "0");
  boxElement.value = "";
};

buttonAdelante.addEventListener("click", aumentCounter);
buttonAtras.addEventListener("click", restCounter);
resetButton.addEventListener("click", resetCounter);
boxElement.addEventListener("keyup", guardarValueBox);
sendElement.addEventListener("click", enviarValueBton);
