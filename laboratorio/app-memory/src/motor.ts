import { Card, Tablero } from "./model";
import { createDivContainers, createMsgs } from "./ui";

export function shuffleArray(card: Card[]): Card[] {
  for (let i = card.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [card[i], card[j]] = [card[j], card[i]];
  }
  return card;
}

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (indice) {
    const carta = tablero.cartas[indice];

    return (
      (!carta.encontrada) ||
      !carta.estaVuelta
    );
  } else {
    createMsgs("carta ya volteada");
    return false;
  }
};

export const actualizarCartaVuelta = (
  tablero: Tablero,
  indice: number,
  estado: boolean
) => {
  return (tablero.cartas = tablero.cartas.map((carta, i) => {
    if (i == indice) {
      return { ...carta, estaVuelta: estado };
    } else {
      return carta;
    }
  }));
};

export const actualizarCartaEncontrada = (tablero: Tablero, indice: number) => {
  return (tablero.cartas = tablero.cartas.map((carta, i) => {
    if (i == indice) {
      return { ...carta, encontrada: true };
    } else {
      return carta;
    }
  }));
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  actualizarCartaVuelta(tablero, indice, true);
};

// Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
export const sonPareja = (tablero: Tablero): boolean => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA && indiceB) {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];

    return cartaA.idFoto === cartaB.idFoto;
  }

  return false;
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (tablero: Tablero): void => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA && indiceB) {
    actualizarCartaEncontrada(tablero, indiceA);
    actualizarCartaEncontrada(tablero, indiceB);
  }
};

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (tablero: Tablero): void => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA && indiceB) {
    actualizarCartaVuelta(tablero, indiceA, false);
    actualizarCartaVuelta(tablero, indiceB, false);
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

  tablero.estadoPartida = "CeroCartasLevantadas";
  //repinto los div con los ids
  createDivContainers(tablero.cartas);
};
