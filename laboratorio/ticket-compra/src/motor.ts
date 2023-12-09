import {
  LineaTicket,
  Producto,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TipoIva,
  TotalPorTipoIva,
  productos,
} from "./model";

export const calcularIVA = (precio: number, typoIva: number) => {
  return (precio * typoIva) / 100;
};

export const tipoIVAAplicar = (typeIVA: string) => {
  switch (typeIVA) {
    case "general":
      return 21;
    case "reducido":
      return 10;
    case "superreducidoA":
      return 5;
    case "superreducidoB":
      return 4;
    case "superreducidoC":
      return 0;
    case "sinIva":
      return 0;
    default:
      return 0;
  }
};

export const calcularPrecioConIva = (producto: Producto): number => {
  return (
    producto.precio +
    calcularIVA(producto.precio, tipoIVAAplicar(producto.tipoIva))
  );
};

const redondearNúmero = (número: number): number => {
  return Number(número.toFixed(2));
};

const calcularTotalProducto = (lineasTicket: LineaTicket) => {
  const productoIva =
    calcularPrecioConIva(lineasTicket.producto) * lineasTicket.cantidad;
  const productoSin = lineasTicket.producto.precio * lineasTicket.cantidad;

  return { productoIva: productoIva, productoSin: productoSin };
};

const lineaTicket = (lineasTicket: LineaTicket): ResultadoLineaTicket => {
  return {
    nombre: lineasTicket.producto.nombre,
    cantidad: lineasTicket.cantidad,
    precioSinIva: calcularTotalProducto(lineasTicket).productoSin,
    tipoIva: lineasTicket.producto.tipoIva,
    precioConIva: calcularTotalProducto(lineasTicket).productoIva,
  };
};

const calcularTotalTicket = (
  lineasTicket: LineaTicket[]
): ResultadoTotalTicket => {
  let totalSin = 0;
  let totalIVA = 0;

  lineasTicket.forEach((lineas) => {
    (totalIVA += lineaTicket(lineas).precioConIva),
      (totalSin += lineaTicket(lineas).precioSinIva);
  });

  return {
    totalSinIva: redondearNúmero(totalSin),
    totalConIva: redondearNúmero(totalIVA),
    totalIva: redondearNúmero(totalIVA - totalSin),
  };
};

const calculaTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
  return lineasTicket.map((ticket) => lineaTicket(ticket));
};

const calcularDesgloseIva = (
  lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {
  const desgloseIva: Record<TipoIva, number> = {
    general: 0,
    reducido: 0,
    superreducidoA: 0,
    superreducidoB: 0,
    superreducidoC: 0,
    sinIva: 0,
  };
  for (const linea of lineasTicket) {
    const precioConIva = calcularPrecioConIva(linea.producto) * linea.cantidad;
    desgloseIva[linea.producto.tipoIva] += precioConIva;
  }

  return Object.entries(desgloseIva).map(([tipoIva, cuantia]) => ({
    tipoIva: tipoIva as TipoIva,
    cuantia: redondearNúmero(cuantia),
  }));
};

console.log(calcularTotalTicket(productos));
console.log(calculaTicket(productos));
console.log(calcularDesgloseIva(productos));
