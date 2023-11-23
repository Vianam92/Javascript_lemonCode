import { eventClickDiv } from "./shell";
import { Card, Tablero } from "./model";
import { positionIndex } from "./motor";

const divElementContain: any = document.querySelector(".contain");
export const imagesCard: Card[] = [];

export const createDivs = (idFoto: number, element: HTMLDivElement) => {
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLDivElement
  ) {
    element.setAttribute("class", "carts");
    element.setAttribute("data-indice-array", `${idFoto}`);
  } else {
    console.error("No se encuentra el elemento");
  }
};

export const createImages = (element: HTMLImageElement) => {
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLImageElement
  ) {
    element.setAttribute("class", "image");
  } else {
    console.error("No se encuentra la imagen");
  }
};

export const createDivContainers = (card: Card[]) => {
  divElementContain.textContent = "";
  for (let i = 0; i < card.length; i++) {
    const createDivElement = document.createElement("div");
    const createImg = document.createElement("img");
    createDivs(card[i].idFoto, createDivElement);
    createImages(createImg);
    createDivElement.appendChild(createImg);
    if (
      divElementContain !== null &&
      divElementContain !== undefined &&
      divElementContain instanceof HTMLDivElement
    ) {
      divElementContain.appendChild(createDivElement);
    } else {
      console.error("No se encuentra el elemento");
    }

    eventClickDiv();
  }
};

export const removeImg = (tablero: Tablero) => {
  if (tablero.indiceCartaVolteadaA !== undefined &&tablero.indiceCartaVolteadaB !== undefined) {

    const imgElementA: any = document.querySelector(
      `div[data-indice-array="${tablero.indiceCartaVolteadaA}"] img`
    );
    const imgElementB: any = document.querySelector(
      `div[data-indice-array="${tablero.indiceCartaVolteadaB}"] img`
    );

    if (
      imgElementA &&
      imgElementB &&
      !tablero.cartas[positionIndex(tablero.indiceCartaVolteadaA, tablero)]
        .encontrada &&
      !tablero.cartas[positionIndex(tablero.indiceCartaVolteadaB, tablero)]
        .encontrada
    ) {
      imgElementA.src = "";
      imgElementB.src = "";
    }
  }
};
