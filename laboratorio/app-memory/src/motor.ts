import { Card, Tablero } from "./model";
import { asignImage, createDivContainers, imagesCard, removeSrc } from "./ui";

export function shuffleArray(card: Card[]): Card[] {
  for (let i = card.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [card[i], card[j]] = [card[j], card[i]];
  }
  return card;
}

export const findImage = (tablero: Tablero, indice: number) =>
  tablero.cartas.find((card: Card) => card.idFoto === indice);

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  encontrada: Boolean
): boolean => {
  return (
    !encontrada &&
    (tablero.estadoPartida === "CeroCartasLevantadas" ||
      tablero.estadoPartida === "UnaCartaLevantada")
  );
};

export const voltearLaCarta = (
  tablero: Tablero,
  indice: number,
  img: HTMLImageElement,
  card: Card
): void => {
  imagesCard.push(card);

  if (card) {
    //asigno la imagen
    asignImage(img, card);

    if (imagesCard.length === 1) {
      tablero.estadoPartida = "UnaCartaLevantada";
      tablero.indiceCartaVolteadaA = indice;
      card.estaVuelta = true;
      tablero.cartas.map((carta) => {
        if (carta.idFoto === tablero.indiceCartaVolteadaA) {
          return (carta.estaVuelta = true);
        } else {
          return false;
        }
      });
    }
    if (imagesCard.length === 2) {
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.indiceCartaVolteadaB = indice;
      tablero.cartas.map((carta) => {
        if (carta.idFoto === tablero.indiceCartaVolteadaB) {
          return (carta.estaVuelta = true);
        } else {
          return false;
        }
      });

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
  const indiceCardA = tablero.indiceCartaVolteadaA;
  const indiceCardB = tablero.indiceCartaVolteadaB;

  if (indiceCardA && indiceCardB) {
    const cartaA = findImage(tablero, indiceCardA);
    const cartaB = findImage(tablero, indiceCardB);

    if (cartaA && cartaB && cartaA.idFoto === cartaB.idFoto) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero): void => {
  const indiceCardA = tablero.indiceCartaVolteadaA;
  const indiceCardB = tablero.indiceCartaVolteadaB;

  if (indiceCardA && indiceCardB) {
    const cartaA = findImage(tablero, indiceCardA);
    const cartaB = findImage(tablero, indiceCardB);

    if (cartaA && cartaB && cartaA.idFoto === cartaB.idFoto) {
      tablero.cartas.map((carta) => {
        if (carta.idFoto === cartaA.idFoto) {
          return (carta.encontrada = true);
        } else {
          return false;
        }
      });
      tablero.cartas.map((carta) => {
        if (carta.idFoto === cartaB.idFoto) {
          return (carta.encontrada = true);
        } else {
          return false;
        }
      });

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
  
  const indiceCardA = tablero.indiceCartaVolteadaA;
  const indiceCardB = tablero.indiceCartaVolteadaB;

  if (indiceCardA && indiceCardB) {
    const cartaA = findImage(tablero, indiceCardA);
    const cartaB = findImage(tablero, indiceCardB);

    if (cartaA && cartaB) {
      tablero.cartas.map((carta) => {
        if (carta.idFoto === cartaA.idFoto) {
          return (carta.estaVuelta = false);
        } else {
          return false;
        }
      });
      tablero.cartas.map((carta) => {
        if (carta.idFoto === cartaB.idFoto) {
          return (carta.estaVuelta = false);
        } else {
          return false;
        }
      });
      setTimeout(() => {
        removeSrc(tablero);
        tablero.indiceCartaVolteadaA = undefined;
        tablero.indiceCartaVolteadaB = undefined;
      }, 1000);
    }
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
