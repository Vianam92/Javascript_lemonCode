import { eventClickDivCards } from "./shell";
import { Card, Tablero, tablero } from "./model";
import { findImage, iniciaPartida, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

export const startGameHandler = () => {
  iniciaPartida(tablero);
};

export const handlerVoltearCarta = (e: any) => {

  const img = e.target.children[0];

  const idElementDiv = e.currentTarget.getAttribute("data-indice-array");

  const id = parseInt(idElementDiv);

  const card = findImage(tablero, id);

  if (card) {
    if (sePuedeVoltearLaCarta(tablero, card.encontrada)) {
      debugger
      if(!card.estaVuelta) {
        voltearLaCarta(tablero, id, img, card);
      } else {
        console.log('carta volteada');
      }
      
    } else {
      console.log("No es posible voltear la carta porque tienes que empezar a jugar");
    }
  }
};

const divElementContain: any = document.querySelector(".contain");
export const imagesCard: Card[] = [];

export const createDivs = (idFoto: number, element: HTMLDivElement, id: number) => {
  if (element && element instanceof HTMLDivElement) {
    element.setAttribute("class", "carts");
    element.setAttribute("data-indice-array", `${idFoto}`);
    element.setAttribute('id', `${id}`)
  } else {
    console.error("No se encuentra el elemento");
  }
};

export const createImages = (idFoto: number, element: HTMLImageElement) => {
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

    createImages(card[i].idFoto, createImg);

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

export const removeSrc = (tablero: Tablero) => {
  if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
    const elementImg = document.querySelectorAll(".card-images");

    elementImg.forEach((element) => {
      const atribute = element.getAttribute("data-indice-imagen");

      if (atribute) {
        if (element && parseInt(atribute) === tablero.indiceCartaVolteadaA) {
          removeImage(element);
        }
        if (element && parseInt(atribute) === tablero.indiceCartaVolteadaB) {
          removeImage(element);
        }
      }
    });
  }
};


