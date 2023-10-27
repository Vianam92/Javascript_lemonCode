import "./style.css";
import { partida} from "./model";
import {
  showGameOver,
  textGameOver,
  title,
  buttonSend,
  buttonPlantarse,
  buttoNuevaPartida,
  showPuntuation,
  showCart,
  createNuevaPartida,
  showStartGame
} from "./ui";
import { messages, aleatory, aleatoryPlus } from './motor';

export const getCart = () => {
  aleatory();
  showCart(aleatoryPlus(partida.aleatoryCart));
  addPoints();
  
};

const reset = () => {
  partida.pointsUser = 0;
  partida.aleatoryCart = 0;
  buttonSend.disabled = false;
  buttonPlantarse.disabled = false;
  buttoNuevaPartida.remove();
  textGameOver.remove();
  showPuntuation();
};

const addPoints = () => {
  debugger
  partida.pointsUser = partida.pointsUser + partida.aleatoryCart;
  if (partida.pointsUser > 7.5) {
    showGameOver("Game Over");
    showStartGame();
    title.textContent = partida.pointsUser.toString();
  } else {
    showPuntuation();
  }
};

const handlerPlantarse = () => {
  showGameOver(messages(partida.pointsUser));
  showStartGame();
};

const events = () => {
  showPuntuation();
  const buttonSend = document.querySelector(".send-button");
  const buttonPlantarse = document.querySelector(".plantarse");
  const buttonAgain = document.querySelector(".again");
  createNuevaPartida();

  if (
    buttonSend !== null &&
    buttonSend !== undefined &&
    buttonSend instanceof HTMLButtonElement
  ) {
    buttonSend.addEventListener("click", getCart);
  } else {
    console.error("No se encuentra el botón de enviar");
  }
  if (
    buttonPlantarse !== null &&
    buttonPlantarse !== undefined &&
    buttonPlantarse instanceof HTMLButtonElement
  ) {
    buttonPlantarse.addEventListener("click", handlerPlantarse);
  } else {
    console.error("No se encuentra el botón de plantarse");
  }
  if (
    buttonAgain !== null &&
    buttonAgain !== undefined &&
    buttonAgain instanceof HTMLButtonElement
  ) {
    buttonAgain.addEventListener("click", reset);
  } else {
    console.error("No se encuentra el botón de empezar");
  }
};

addEventListener("DOMContentLoaded",  events);
