import { isFormadoIBAN } from "./validaciones";

describe("Iban bien formado", () => {
 test.each([
 ["ES21 1465 0100 72 2030876293", true],
 ["ES2114650100722030876293", true],
 ["ES21-1465-0100-72-2030876293", true],
 ["ES21.1465.0100.72.2030876293", false],
 ])(
 "",

 (valor: string, expected: boolean) => {
 expect(isFormadoIBAN(valor)).toBe(expected);
 }
 );
});