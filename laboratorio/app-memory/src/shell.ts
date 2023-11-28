import { tablero } from "./model";
import {
  createDivContainers,
  handlerVoltearCarta,
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
  const buttonStart = document.querySelector(".btn-start");
  if (buttonStart && buttonStart instanceof HTMLButtonElement) {
    buttonStart.addEventListener('click', startGameHandler);
  } else {
    console.error("No se encuentra el botón de enviar");
  }
};

export const events = () => {
  createDivContainers(tablero.cartas);
  clickButtonStartGame();
};
