import { tablero } from "./model";
import {
  buttonReiniciar,
  buttonStart,
  createDivContainers,
  handlerVoltearCarta,
  reiniciarJuego,
  startGameHandler,
} from "./ui";

export const eventClickDivCards = () => {
  const getDivElement = document.querySelectorAll(".carts");

  getDivElement.forEach((divElement) => {
    if (divElement && divElement instanceof HTMLDivElement) {
      divElement.addEventListener("click", handlerVoltearCarta);
    } else {
      console.error("No se encuentra el elemento");
    }
  });
};

const clickButtonStartGame = () => {
  if (buttonStart && buttonStart instanceof HTMLButtonElement) {
    buttonStart.addEventListener('click', startGameHandler);
  } else {
    console.error("No se encuentra el botón de enviar");
  }

  if(buttonReiniciar && buttonReiniciar instanceof HTMLButtonElement){
    buttonReiniciar.addEventListener('click', reiniciarJuego);
  }else{
    console.error("No se encuentra el botón de reiniciar")
  }
};

export const events = () => {
  createDivContainers(tablero.cartas);
  clickButtonStartGame();
};
