import { Card, Tablero } from "./model";
import { createDivContainers, imagesCard, removeImg } from "./ui";

export function shuffleArray(card: Card[]): Card[] {
  for (let i = card.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [card[i], card[j]] = [card[j], card[i]];
  }
  return card;
}

export const positionIndex = (index: number, tablero: Tablero) =>
  tablero.cartas.findIndex((card) => card.idFoto === index);

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  const card = tablero.cartas[indice];

  return (
    !card.encontrada &&
    (tablero.estadoPartida === "CeroCartasLevantadas" ||
      tablero.estadoPartida === "UnaCartaLevantada")
  );
};

export const voltearLaCarta = (
  tablero: Tablero,
  indice: number,
  img: any
): void => {
  const card: any = tablero.cartas.find((card) => card.idFoto === indice);

  imagesCard.push(card);

  if (card) {
    //asigno la imagen
    img.setAttribute("data-indice-imagen", `${card?.idFoto}`);
    img.setAttribute("src", `${card?.imagen}`);
    img.classList.remove("image");
    img.classList.add("visible");

    if (imagesCard.length === 1) {
      tablero.estadoPartida = "UnaCartaLevantada";
      tablero.indiceCartaVolteadaA = indice;
      tablero.cartas[positionIndex(indice, tablero)].estaVuelta = true;
    }
    if (imagesCard.length === 2) {
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.indiceCartaVolteadaB = indice;
      tablero.cartas[positionIndex(indice, tablero)].estaVuelta = true;

      if (sonPareja(tablero)) {
        parejaEncontrada(tablero);
      } else {
        parejaNoEncontrada(tablero);
      }
      imagesCard.length = 0;
      tablero.estadoPartida = "CeroCartasLevantadas";
    }
  }
};

// Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
export const sonPareja = (tablero: Tablero): boolean => {
  const cartaA = tablero.indiceCartaVolteadaA;
  const cartaB = tablero.indiceCartaVolteadaB;

  return cartaA === cartaB;
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero): void => {
  if (
    tablero.indiceCartaVolteadaA !== undefined &&
    tablero.indiceCartaVolteadaB !== undefined
  ) {
    const cartaA =
      tablero.cartas[positionIndex(tablero.indiceCartaVolteadaA, tablero)];
    const cartaB =
      tablero.cartas[positionIndex(tablero.indiceCartaVolteadaB, tablero)];

    if (cartaA.idFoto === cartaB.idFoto) {
      tablero.cartas[
        positionIndex(tablero.indiceCartaVolteadaA, tablero)
      ].encontrada = true;
      tablero.cartas[
        positionIndex(tablero.indiceCartaVolteadaB, tablero)
      ].encontrada = true;

      tablero.indiceCartaVolteadaA = undefined;
      tablero.indiceCartaVolteadaB = undefined;

      if (esPartidaCompleta(tablero)) {
        console.log("¡Partida completa!");
      }
    }
  }
};

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero): void => {
  if (
    tablero.indiceCartaVolteadaA !== undefined &&
    tablero.indiceCartaVolteadaB !== undefined
  ) {
    tablero.cartas[
      positionIndex(tablero.indiceCartaVolteadaA, tablero)
    ].estaVuelta = false;
    tablero.cartas[
      positionIndex(tablero.indiceCartaVolteadaB, tablero)
    ].estaVuelta = false;
    setTimeout(() => {
      removeImg(tablero);
      tablero.indiceCartaVolteadaA = undefined;
      tablero.indiceCartaVolteadaB = undefined;
    }, 1000);
  }
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((card) => card.encontrada === true);
};

// /*
// Iniciar partida

export const iniciaPartida = (tablero: Tablero): void => {
  //barajo las cartas
  tablero.cartas = shuffleArray(tablero.cartas);

  //repinto los div con los ids
  createDivContainers(tablero.cartas);

  //cambio estado de la partida
  tablero.estadoPartida = "CeroCartasLevantadas";
};
