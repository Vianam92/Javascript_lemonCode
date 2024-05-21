export interface Reserva {
  tipoHabitacion: string;
  desayuno: boolean;
  pax: number;
  noches: number;
}

export interface Price{
  habStandard: number;
  habSuite: number;
}

export const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
    desayuno: false,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
    desayuno: false,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
    desayuno: true,
  },
];

export const listPrice = {
  habStandard: 100,
  habSuite: 150,
};

export const listPriceTour = {
  habStandard: 100,
  habSuite: 100,
};
