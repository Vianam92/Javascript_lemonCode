import { Price, Reserva } from "./model";

export class Reservas {
  personaAdicional = 40;
  listReservas: Reserva[];
  listprice: Price;
  constructor(list: Reserva[], listprice: Price) {
    this.listReservas = list;
    this.listprice = listprice;
  }
  
  subtotal() {
    let subtotal = 0;
    this.listReservas.forEach((reserva) => {
      const price =
        reserva.tipoHabitacion === "standard"
          ? this.listprice.habStandard
          : this.listprice.habSuite;
      const extraPerson =
        reserva.pax > 1 ? this.personaAdicional * (reserva.pax - 1) : 0;
      const isDesayuno = reserva.desayuno ? reserva.pax * 15 : 0;
      subtotal += (price + extraPerson + isDesayuno) * reserva.noches;
    });
    return subtotal;
  }

  total() {
    let total = 0;
    return (total += this.subtotal() * 1.21);
  }
}

export class ReservasHotel extends Reservas {
  constructor(list: Reserva[], listPrice: Price) {
    super(list, listPrice);
  }
}

export class TourOperator extends Reservas {
  constructor(list: Reserva[], listPrice: Price) {
    super(list, listPrice);
  }

  descuento() {
    let conDescuento = (this.total() * 0.15) / 100;
    return Math.round(this.total() - conDescuento);
  }
}
