import "./style.css";
import "./motor.ts";
import { ReservasHotel, TourOperator } from "./motor";
import { listPrice, listPriceTour, reservas } from "./model";

const newReserva = new ReservasHotel(reservas, listPrice);
const operatorTout = new TourOperator(reservas, listPriceTour);

console.log(newReserva.total());
console.log(operatorTout.total());

