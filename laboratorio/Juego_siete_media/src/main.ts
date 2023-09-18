import "./style.css";

let pointsUser: number = 0;
let aleatoryCart: number;
const divElement = document.querySelector(".turno-display");
const imgElement = document.createElement("img");
const title = document.createElement("h2");
const buttonSend = document.createElement("button");
const buttonPlantarse = document.createElement("button");
const buttoNuevaPartida = document.createElement("button");
const textGameOver = document.createElement("p");
const url =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas";
const arrayCops = [
  "as-copas",
  "dos-copas",
  "tres-copas",
  "cuatro-copas",
  "cinco-copas",
  "seis-copas",
  "siete-copas",
  "sota-copas",
  "caballo-copas",
  "rey-copas",
];

const showPuntuation = () => {
  title.remove();
  const backCart = `${url}/back.jpg`;
  divElement?.appendChild(title);
  if (title !== null && title !== undefined) {
    title.textContent = pointsUser.toString();
  }
  createButtonSend();
  createButtonPlant();
  createNuevaPartida();
  showCart(backCart);
};

const createButtonSend = () => {
  buttonSend.setAttribute("class", "send-button");
  divElement?.appendChild(buttonSend);
  buttonSend.textContent = "Pedir Carta";
};

const createButtonPlant = () => {
  buttonPlantarse.setAttribute("class", "plantarse");
  divElement?.appendChild(buttonPlantarse);
  buttonPlantarse.textContent = "Plantarse";
};

const createNuevaPartida = () => {
  buttoNuevaPartida.setAttribute("class", "again");
  divElement?.appendChild(buttoNuevaPartida);
  buttoNuevaPartida.textContent = "Nueva Partida";
};

const showCart = (img: string) => {
  imgElement.remove();
  divElement?.appendChild(imgElement);
  imgElement.src = img;
};

const showGameOver = (message: string) => {
  textGameOver.remove();
  divElement?.appendChild(textGameOver);
  textGameOver.textContent = message;
};

const aleatory = () => {
  aleatoryCart = Math.round(Math.random() * 10);
  return aleatoryCart;
};

const getCart = () => {
  aleatory();
  if (aleatoryCart > 7) aleatoryCart = aleatoryCart + 2;
  if (aleatoryCart === 0) aleatoryCart = aleatoryCart + 1;
  let cart: string = `${url}/copas/${aleatoryCart}_${
    arrayCops[aleatoryCart <= 7 ? aleatoryCart - 1 : aleatoryCart - 3]
  }.jpg`;
  addPoints();
  showCart(cart);
};

const reset = () => {
  pointsUser = 0;
  aleatoryCart = 0;
  buttonSend.disabled = false;
  buttoNuevaPartida.remove();
  showPuntuation();
};

const addPoints = () => {
  pointsUser = pointsUser + aleatoryCart;
  if (pointsUser > 7.5) {
    showGameOver("Game Over");
    buttonSend.disabled = true;
    buttoNuevaPartida.removeAttribute("visibility");
  }
  showPuntuation();
};

const handlerPlantarse = () => {
  buttonSend.disabled = true;
  if (pointsUser < 4) {
    showGameOver("Has sido muy conservador");
  } else if (pointsUser === 5) {
    showGameOver("Te ha entrado el canguelo eh?");
  } else if (pointsUser === 6 || pointsUser === 7) {
    showGameOver("Casi casi...");
  } else if (pointsUser === 7.5) {
    showGameOver("¡ Lo has clavado! ¡Enhorabuena!");
  }
};

const events = () => {
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
  }
  if (
    buttonPlantarse !== null &&
    buttonPlantarse !== undefined &&
    buttonPlantarse instanceof HTMLButtonElement
  ) {
    buttonPlantarse.addEventListener("click", handlerPlantarse);
  }
  if (
    buttonAgain !== null &&
    buttonAgain !== undefined &&
    buttonAgain instanceof HTMLButtonElement
  ) {
    buttonAgain.addEventListener("click", reset);
  }
};

showPuntuation();
addEventListener("DOMContentLoaded", events);
