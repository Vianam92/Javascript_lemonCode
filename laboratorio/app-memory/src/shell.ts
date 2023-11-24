import { tablero } from "./model";
import {
  createDivContainers,
  handlerVoltearCarta,
  startGameHandler,
} from "./ui";

const listenEvents = (element: any, handler: any, eventType: any) => {
  element.addEventListener(eventType, handler);
};

export const eventClickDivCards = () => {
  const getDivElement = document.querySelectorAll(".carts");

  getDivElement.forEach((divElement) => {
    if (divElement && divElement instanceof HTMLDivElement) {
      listenEvents(divElement, handlerVoltearCarta, "click");
    } else {
      console.error("No se encuentra el elemento");
    }
  });
};

const clickButtonStartGame = () => {
  const buttonStart = document.querySelector(".btn-start");
  if (buttonStart && buttonStart instanceof HTMLButtonElement) {
    listenEvents(buttonStart, startGameHandler, "click");
  } else {
    console.error("No se encuentra el botón de enviar");
  }
};

export const events = () => {
  createDivContainers(tablero.cartas);
  clickButtonStartGame();
};

addEventListener("DOMContentLoaded", events);
