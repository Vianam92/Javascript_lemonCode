import { ValidacionClave, commonPasswords } from "./model";

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const primeraInvalida = validaciones.find(
    (validacion) => !validacion.esValida
  );
  if (primeraInvalida) {
    return primeraInvalida;
  } else {
    return { esValida: true};
  }
};

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const rules = /[A-Z][a-z]/;

  if (rules.test(clave)) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas.",
    };
  }
};

const tieneNumeros = (clave: string): ValidacionClave => {
  const rules = /\d/.test(clave);
  if (rules) {
    return { esValida: true };
  } else {
    return { esValida: false, error: "La clave debe de tener números." };
  }
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const rules = /[!@#_$%^&*(),.?":{}|<>]/.test(clave);
  if (rules) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales.",
    };
  }
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres.",
    };
  }
};

const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario.",
    };
  }
};

const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const contienePalabraComun = commonPasswords.some((palabra) =>
    clave.toLowerCase().includes(palabra.toLowerCase())
  );

  if (!contienePalabraComun) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes.",
    };
  }
};

const nombreUsuario = "ejemplo_usuario";
const clave = "MiClave123@";

const resultado = validarClave(nombreUsuario, clave, commonPasswords);
console.log(resultado);
