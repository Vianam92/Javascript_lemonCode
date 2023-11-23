
import { vi } from "vitest";
import {messages, aleatory, condicionals, aleatoryPlus} from './motor';
import * as condicional from "./motor";

describe("motor test", () => {
  it("should return ¡ Lo has clavado! ¡Enhorabuena!", () => {
    const text = "¡ Lo has clavado! ¡Enhorabuena!"; 

    const points = 7.5;

    const result = messages(points);

    expect(result).toBe(text);
  });

  it("should return a random number between 0 and 10", () => {
    const randomValue = aleatory();

    expect(randomValue).toBeGreaterThanOrEqual(0);
    
    expect(randomValue).toBeLessThanOrEqual(10);
  });

  it('should return aleatoryCart + 2 when aleatoryCart is greater than 7', () => {
    const result = condicionals(8);

    expect(result).toEqual(10);
  });

  it('should return correctly cart', () => {
    const url = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"

    vi.spyOn(condicional, "condicionals").mockReturnValue(6);

    const result = aleatoryPlus(6);

    expect(result).toEqual(url);
  });
});