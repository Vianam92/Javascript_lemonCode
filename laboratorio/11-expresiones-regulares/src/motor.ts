import {
  banco,
  bancos,
  codigoSursal,
  digitoControl,
  inputValue,
  mensFormado,
  mensValid,
  numeroCuenta,
  textarea,
} from "./model";
import { paintImages, paintText } from "./ui";
import { FindInTextarea, coincidencia, isFormadoIBAN } from "./validaciones";
import * as iban from "ibantools";

const findBanc = (value: string): string => {
  const coincidenciaObj = coincidencia(value);

  if (!coincidenciaObj) return "";

  const bancoCode = bancos.find((banco) => {
    if (coincidenciaObj.codigoBanco) {
      return banco.includes(coincidenciaObj.codigoBanco);
    }
    return;
  });

  if (!bancoCode) return "";

  const result = bancoCode.match(/^\d+\s(.*)/);

  return result ? result[1] : "";
};

export const isValidMessage = () => {
  if (!mensFormado || !mensValid) false;
  if (!(inputValue instanceof HTMLInputElement)) return;
  const isValidIBAN = isFormadoIBAN(inputValue.value);
  const coincidenciaObj = coincidencia(inputValue.value);
  const isValid = iban.isValidIBAN(inputValue.value);

  paintText(
    mensFormado,
    isValidIBAN ? "El IBAN está bien formado" : "El IBAN no está bien formado"
  );

  if (isValidIBAN) {
    paintText(banco, findBanc(inputValue.value));
    if (
      coincidenciaObj?.codigoSucursal &&
      coincidenciaObj.digitoControl &&
      coincidenciaObj.numeroCuenta
    ) {
      paintText(codigoSursal, coincidenciaObj.codigoSucursal);
      paintText(digitoControl, coincidenciaObj.digitoControl);
      paintText(numeroCuenta, coincidenciaObj.numeroCuenta);
    }
    paintText(
      mensValid,
      isValid ? "El IBAN es válido" : "El IBAN no es válido"
    );
  }
};

export const searchEnlaces = (): void => {
    let imagesArray;
    if(textarea instanceof HTMLTextAreaElement) {
        imagesArray = FindInTextarea(textarea && textarea.value);
    }
    
    if(imagesArray && imagesArray.length){
        imagesArray.forEach(image => paintImages(image))   
    }
}
