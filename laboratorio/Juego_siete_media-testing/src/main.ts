import "./style.css";
import { partida, url, arrayCops } from "./model";
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
import { messages, aleatory } from "./motor";

const getCart = () => {
  aleatory();
  if (partida.aleatoryCart > 7) partida.aleatoryCart = partida.aleatoryCart + 2;
  if (partida.aleatoryCart === 0)
    partida.aleatoryCart = partida.aleatoryCart + 1;
  let cart: string = `${url}/copas/${partida.aleatoryCart}_${
    arrayCops[
      partida.aleatoryCart <= 7
        ? partida.aleatoryCart - 1
        : partida.aleatoryCart - 3
    ]
  }.jpg`;
  addPoints();
  showCart(cart);
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
  messages();
  showStartGame();
};

const events = () => {
  showPuntuation();
  const buttonSend = document.querySelector(".send-button");
  const buttonPlantarse = document.querySelector(".plantarse");
  const buttonAgain = document.querySelector(".again");
  createNuevaPartida();
  console.log(buttonAgain);
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
