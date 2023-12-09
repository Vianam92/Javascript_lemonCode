import { Producto } from "./model";
import { calcularIVA, calcularPrecioConIva, tipoIVAAplicar } from "./motor";

describe("motor test", () => {
  it("should return iva", () => {

    const result = calcularIVA(3, 21);

    // Assert
    expect(result).toEqual(0.63);
  });
  it("should return Iva type", () => {
    // Arrange

    const typeIva = "reducido";

    // Act

    const result = tipoIVAAplicar(typeIva);

    // Assert
    expect(result).toEqual(10);
  });
  it("should return price with iva", () => {
    // Arrange

    const producto: Producto = {
      precio: 2,
      tipoIva: "general",
      nombre: "judias",
    };

    // Act

    const result = calcularPrecioConIva(producto);

    // Assert
    expect(result).toEqual(2.42);
  });
});
