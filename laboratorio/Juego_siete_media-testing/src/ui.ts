import { partida, url } from "./model";

export const textGameOver = document.createElement("p");
export const divElement = document.querySelector(".turno-display");
export const title = document.createElement("h2");
export const buttonSend = document.createElement("button");
export const buttonPlantarse = document.createElement("button");
export const buttoNuevaPartida = document.createElement("button");

export const showPuntuation = () => {
  title.remove();
  const backCart = `${url}/back.jpg`;
  divElement?.appendChild(title);
  if (
    title !== null &&
    title !== undefined &&
    title instanceof HTMLHeadingElement
  ) {
    title.textContent = partida.pointsUser.toString();
  } else {
    console.error("No se encuentra el elemento");
  }
  createButtonSend();
  createButtonPlant();
  createNuevaPartida();
  showCart(backCart);
};

export const showCart = (img: string) => {
    const image = document.querySelector(".image");
    if (
      image !== null &&
      image !== undefined &&
      image instanceof HTMLImageElement
    ) {
      image.src = img;
    } else {
      console.error("No se encuentra la imagen");
    }
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

export const createNuevaPartida = () => {
  buttoNuevaPartida.setAttribute("class", "again visible");
  divElement?.appendChild(buttoNuevaPartida);
  buttoNuevaPartida.textContent = "Nueva Partida";
};

export const showGameOver = (message: string) => {
  textGameOver.remove();
  divElement?.appendChild(textGameOver);
  textGameOver.textContent = message;
};

export const showStartGame = () => {
    buttonSend.disabled = true;
    buttonPlantarse.disabled = true;
    buttoNuevaPartida.classList.remove("again");
  };
