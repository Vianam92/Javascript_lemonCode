import { arrayCops, partida, url } from "./model";

export const aleatory = () => {
  partida.aleatoryCart = Math.round(Math.random() * 10);
  return partida.aleatoryCart;
};

export const messages = (points: number): string => {
  if (points < 4) {
    return "Has sido muy conservador";
  } else if (points === 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (points === 6 || points === 7) {
    return "Casi casi...";
  } else if (points === 7.5) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  } else {
    return "";
  }
};

export const condicionals = (aleatory: number) => {
  if (aleatory > 7) {
    return aleatory = aleatory + 2;
  } else if (aleatory === 0) {
    return aleatory = aleatory + 1;
  } else {
    return aleatory;
  }
};

export const aleatoryPlus = (aleatory: number) => {
  partida.aleatoryCart = condicionals(aleatory);
  let cart: string = `${url}/copas/${partida.aleatoryCart}_${
    arrayCops[partida.aleatoryCart <= 7 ? partida.aleatoryCart - 1 : partida.aleatoryCart - 3]
  }.jpg`;
  return cart;
};
