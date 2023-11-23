import { tablero } from "./model";
import { iniciaPartida, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";
import "./shell";
import "./style.css";

export const startGameHandler = () => {
  iniciaPartida(tablero);
};

export const handlerVoltearCarta = (e: any) => {
  const img = e.target.children[0];

  const idElementDiv = e.currentTarget.getAttribute("data-indice-array");
  
  const id = parseInt(idElementDiv);
  if (sePuedeVoltearLaCarta(tablero, id)) {
    voltearLaCarta(tablero, id, img);
  }
};
