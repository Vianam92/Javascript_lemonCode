import "./style.css";

const elementh1: any = document.querySelector('.numero-turno');
let counter: number = 1;
const buttonAtras = document.querySelector('.atras');
const buttonAdelante = document.querySelector('.adelante');
const resetButton = document.querySelector('.reset');
const sendElement = document.querySelector('.send');
const boxElement = document.querySelector('.box');
let valueInput: string;
elementh1.innerHTML = counter.toString().padStart(2, "0");

const restCounter = () => {
   if (!elementh1) return;
   if(counter > 0) counter = counter - 1
   elementh1.innerHTML = counter.toString().padStart(2, "0");
}

const aumentCounter = () => {
    if (!elementh1) return;
    counter = counter + 1
    elementh1.innerHTML = counter.toString().padStart(2, "0");
}

const resetCounter = () => {
    if (!elementh1) return;
    counter = 0;
    elementh1.innerHTML = counter.toString();
}

const guardarValueBox = (event: any) => {
    const value =  event?.target.value;
    valueInput = value
}

const enviarValueBton = () => {
    if (!elementh1) return;
    elementh1.innerHTML = valueInput.padStart(2, "0");
}

buttonAdelante?.addEventListener("click", aumentCounter);
buttonAtras?.addEventListener("click", restCounter);
resetButton?.addEventListener("click", resetCounter);
boxElement?.addEventListener("keyup", guardarValueBox);
sendElement?.addEventListener("click", enviarValueBton);

