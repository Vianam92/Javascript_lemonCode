import { partida } from "./model";
import { showGameOver } from "./ui";

export const aleatory = () => {
  partida.aleatoryCart = Math.round(Math.random() * 10);
  return partida.aleatoryCart;
};

export const messages = () : string => {
    if (partida.pointsUser < 4) {
     return  "Has sido muy conservador";
    } else if (partida.pointsUser === 5) {
     return "Te ha entrado el canguelo eh?";
    } else if (partida.pointsUser === 6 || partida.pointsUser === 7) {
      return "Casi casi...";
    } else if (partida.pointsUser === 7.5) {
      return "¡ Lo has clavado! ¡Enhorabuena!";
    } else{
      return "";
    }
  }