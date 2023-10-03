import { partida } from "./model";
import { showGameOver } from "./ui";

export const aleatory = () => {
  partida.aleatoryCart = Math.round(Math.random() * 10);
  return partida.aleatoryCart;
};

export const messages = () => {
    if (partida.pointsUser < 4) {
      showGameOver("Has sido muy conservador");
    } else if (partida.pointsUser === 5) {
      showGameOver("Te ha entrado el canguelo eh?");
    } else if (partida.pointsUser === 6 || partida.pointsUser === 7) {
      showGameOver("Casi casi...");
    } else if (partida.pointsUser === 7.5) {
      showGameOver("¡ Lo has clavado! ¡Enhorabuena!");
    }
  }