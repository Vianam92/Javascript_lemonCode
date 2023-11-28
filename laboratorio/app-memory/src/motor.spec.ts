import { sePuedeVoltearLaCarta } from "./motor";
import { Tablero } from "./model";

describe("Se puede voltear carta", () => {
  it("should return true when conditions are met", () => {
    const tablero: Tablero = {
      estadoPartida: "CeroCartasLevantadas",
      cartas: [],
    };

    const result = sePuedeVoltearLaCarta(tablero, false);

    expect(result).toBe(true);
  });

  it("should return true when conditions are not met", () => {
    const tablero: Tablero = {
      estadoPartida: "CeroCartasLevantadas",
      cartas: [],
    };

    const result = sePuedeVoltearLaCarta(tablero, true);

    expect(result).toBe(false);
  });
});
