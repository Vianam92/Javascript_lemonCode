import { eventClickDivCards } from "./shell";
import { Card, Tablero, tablero } from "./model";
import {
  esPartidaCompleta,
  iniciaPartida,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
} from "./motor";

//constantes
const divElementContain = document.querySelector(".contain");
export const buttonStart = document.querySelector(".btn-start");
export const buttonReiniciar = document.querySelector(".btn-reiniciar");
let count = 0;

//empezar partida
export const startGameHandler = () => {
  createMsgs("partida iniciada");

  iniciaPartida(tablero);
};

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
    element.setAttribute("class", "invisible card-images");
    element.setAttribute("data-indice-imagen", `${idFoto}`);
  } else {
    console.error("No se encuentra la imagen");
  }
};

export const createDivContainers = (card: Card[]) => {
  if (divElementContain) divElementContain.textContent = "";
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
  element.classList.add("invisible");
};

export const asignImage = (imgElement: HTMLImageElement, card: Card) => {
  imgElement.setAttribute("src", `${card?.imagen}`);
  imgElement.classList.remove("invisible");
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

export const createMsgs = (msg: string) => {
  const divContainElement = document.querySelector(".contain-msg");
  const createText = document.createElement("p");
  createText.setAttribute("class", "text");
  if (divContainElement && divContainElement instanceof HTMLDivElement) {
    divContainElement.appendChild(createText);
    createText.textContent = msg;
    setTimeout(() => {
      createText.remove();
    }, 1000);
  }
};

const reiniciarValoresTablero = () =>
  tablero.cartas.map((card) => {
    card.encontrada = false;
    card.estaVuelta = false;
  });

export const reiniciarJuego = (): void => {
  if (
    buttonStart &&
    buttonStart instanceof HTMLButtonElement &&
    buttonReiniciar &&
    buttonReiniciar instanceof HTMLButtonElement
  ) {
    buttonStart.classList.remove("invisible");
    buttonReiniciar.classList.add("invisible");

    tablero.estadoPartida = "PartidaNoIniciada";

    createDivContainers(tablero.cartas);

    reiniciarValoresTablero();

    //reiniciar los puntos del jugador;
    count = 0;
  }
};

const voltearPrimeraCarta = (indice: number) => {
  tablero.indiceCartaVolteadaA = indice;
  tablero.estadoPartida = "UnaCartaLevantada";
};

const voltearSegundaCarta = (indice: number) => {
  tablero.indiceCartaVolteadaB = indice;
  tablero.estadoPartida = "DosCartasLevantadas";
};

const partidaCompletada = () => {
  tablero.estadoPartida = "PartidaCompleta";
  createMsgs("¡Partida Completa!");
  if (
    buttonStart &&
    buttonStart instanceof HTMLButtonElement &&
    buttonReiniciar &&
    buttonReiniciar instanceof HTMLButtonElement
  ) {
    buttonStart.classList.add("invisible");
    buttonReiniciar.classList.remove("invisible");
  }
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const handlerVoltearCarta = (e: any) => {
  const indice = e.target.id;
  if (
    sePuedeVoltearLaCarta(tablero, indice) &&
    tablero.estadoPartida !== "PartidaNoIniciada" &&
    tablero.estadoPartida !== "DosCartasLevantadas"
  ) {
    const card = tablero.cartas[indice];
    const img = e.target.children[0];

    //voltear la carta
    voltearLaCarta(tablero, indice);

    //actualizar la carta
    asignImage(img, card);

    if (tablero.estadoPartida === "CeroCartasLevantadas") {
      voltearPrimeraCarta(indice);
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      voltearSegundaCarta(indice);
      if (sonPareja(tablero)) {
        parejaEncontrada(tablero);
        count++;
        if (esPartidaCompleta(tablero)) {
          partidaCompletada();
        } else {
          tablero.estadoPartida = "CeroCartasLevantadas";
        }
      } else {
        parejaNoEncontrada(tablero);
        count++;
        setTimeout(() => {
          rotateImage(tablero);
          tablero.estadoPartida = "CeroCartasLevantadas";
          tablero.indiceCartaVolteadaA = undefined;
          tablero.indiceCartaVolteadaB = undefined;
        }, 1000);
      }
    }
  } else if (tablero.estadoPartida === "PartidaNoIniciada") {
    createMsgs("inicia la partida");
  } else {
    createMsgs("Las cartas se estan girando");
  }
  numberOfGames();
};

export const numberOfGames = () => {
  const elementSpan = document.querySelector(".numero-intentos");
  if (elementSpan && elementSpan instanceof HTMLSpanElement) {
    elementSpan.textContent = "";
    elementSpan.textContent += count;
  }
};
