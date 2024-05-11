import { Filtrado } from "./model";

const patron =
  /^[A-Za-z]{2}\d{2}\D?(?<codigoBanco>\d{4})\D?(?<codigoSucursal>\d{4})\D?(?<digitoControl>\d{2})\D?(?<numeroCuenta>\d{10})$/;

export const isFormadoIBAN = (value: string): boolean => {
  return patron.test(value);
};

export const coincidencia = (value: string) => {
  const coincidencia = patron.exec(value);
  if (coincidencia) {
    const {
      codigoSucursal,
      digitoControl,
      numeroCuenta,
      codigoBanco,
    }: Filtrado = coincidencia.groups as any;
    return { codigoSucursal, digitoControl, numeroCuenta, codigoBanco };
  }
  return;
};

export const FindInTextarea = (value: string) => {
  const regex = /<img[^>]*src="([^"]*)"[^>]*>/g;

  const urls = value.match(regex);

  return urls;
};
