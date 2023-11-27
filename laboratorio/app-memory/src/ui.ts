import { eventClickDivCards } from "./shell";
import { Card, Tablero, tablero } from "./model";
import { iniciaPartida, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

export const startGameHandler = () => {
  //cambio estado de la partida
  tablero.estadoPartida = "CeroCartasLevantadas";

  iniciaPartida(tablero);
};

export const handlerVoltearCarta = (e: any) => {
  const img = e.target.children[0];

  const indice = e.target.id;

  const card = tablero.cartas[indice];

  if (card) {
    if (sePuedeVoltearLaCarta(tablero, card.encontrada) && !card.estaVuelta) {
      voltearLaCarta(tablero, img, card, indice);
    } else {
      console.log(
        "No es posible voltear la carta porque tienes que empezar a jugar"
      );
    }
  }
};

const divElementContain: any = document.querySelector(".contain");
export const imagesCard: Card[] = [];

export const createDivs = (
  idFoto: number,
  element: HTMLDivElement,
  id: number
) => {
  if (element && element instanceof HTMLDivElement) {
    element.setAttribute("class", "carts");
    element.setAttribute("data-indice-array", `${idFoto}`);
    element.setAttribute("id", `${id}`);
  } else {
    console.error("No se encuentra el elemento");
  }
};

export const asignIdFotoImage = (idFoto: number, element: HTMLImageElement) => {
  if (element && element instanceof HTMLImageElement) {
    element.setAttribute("class", "image card-images");
    element.setAttribute("data-indice-imagen", `${idFoto}`);
  } else {
    console.error("No se encuentra la imagen");
  }
};

export const createDivContainers = (card: Card[]) => {
  divElementContain.textContent = "";
  for (let i = 0; i < card.length; i++) {
    const createDivElement = document.createElement("div");

    const createImg = document.createElement("img");

    createDivs(card[i].idFoto, createDivElement, i);

    asignIdFotoImage(card[i].idFoto, createImg);

    createDivElement.appendChild(createImg);

    if (divElementContain && divElementContain instanceof HTMLDivElement) {
      divElementContain.appendChild(createDivElement);
    } else {
      console.error("No se encuentra el elemento");
    }

    eventClickDivCards();
  }
};

const removeImage = (element: any) => {
  element.setAttribute("src", "");
  element.classList.remove("visible");
  element.classList.add("image");
};

export const asignImage = (imgElement: HTMLImageElement, card: Card) => {
  imgElement.setAttribute("src", `${card?.imagen}`);
  imgElement.classList.remove("image");
  imgElement.classList.add("visible");
};

export const rotateImage = (tablero: Tablero) => {
  if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
    const elementImg = document.querySelectorAll(".card-images");

    elementImg.forEach((element, i) => {
      if (i == tablero.indiceCartaVolteadaA) {
        removeImage(element);
      }
      if (i == tablero.indiceCartaVolteadaB) {
        removeImage(element);
      }
    });
  }
};
