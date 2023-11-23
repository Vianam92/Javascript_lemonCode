import { handlerVoltearCarta, startGameHandler } from './main';
import { tablero } from './model';
import { createDivContainers } from './ui';

const listenEvents = (element: any, handler: any, eventType: any) => {
    element.addEventListener(eventType, handler);
  };

 export const eventClickDiv = () => {
    const getDivElement = document.querySelectorAll(".carts");
  
    getDivElement.forEach((divElement) => {
      if (
        divElement !== null &&
        divElement !== undefined &&
        divElement instanceof HTMLDivElement
      ) {
        listenEvents(divElement, handlerVoltearCarta, "click");
      } else {
        console.error("No se encuentra el elemento");
      }
    });
  }
 const clickButton = () => {
    const buttonStart = document.querySelector(".btn-start");
    if (
      buttonStart !== null &&
      buttonStart !== undefined &&
      buttonStart instanceof HTMLButtonElement
    ) {
        listenEvents(buttonStart, startGameHandler, 'click')
    } else {
      console.error("No se encuentra el botón de enviar");
    }
}

export const events = () => {
  createDivContainers(tablero.cartas);
  clickButton();
};

addEventListener("DOMContentLoaded", events);

