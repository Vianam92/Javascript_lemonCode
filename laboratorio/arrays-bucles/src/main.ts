import { NumeroPacientesPorEspecialidad, Pacientes, pacientes } from "./model";

//especialidad Pediatria

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let newPacientes: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      newPacientes.push(pacientes[i]);
    }
  }
  return newPacientes;
};

console.log("Apartado 1", obtenPacientesAsignadosAPediatria(pacientes));

//especialidad Pediatria y menos de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesEspecialidadPediatria =
    obtenPacientesAsignadosAPediatria(pacientes);
  let newPacientes: Pacientes[] = [];
  for (let i = 0; i < pacientesEspecialidadPediatria.length; i++) {
    if (pacientesEspecialidadPediatria[i].edad < 10) {
      newPacientes.push(pacientesEspecialidadPediatria[i]);
    }
  }
  return newPacientes;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
    }
  }
  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad !== "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }}
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

 //Apartado 4

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let isPacientesPediatria: boolean = false;
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        isPacientesPediatria = true;
      }}
      return isPacientesPediatria;
  };

  console.log(HayPacientesDePediatria(pacientes));

 //Apartado 5
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    const especialidades: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
    for (let i = 0; i < pacientes.length; i++) {
      switch (pacientes[i].especialidad) {
        case "Medico de familia":
          especialidades.medicoDeFamilia++;
          break;
        case "Pediatra":
          especialidades.pediatria++;
          break;
        case "Cardiólogo":
          especialidades.cardiologia++;
          break;
        default:
          console.log("tratar otra enfermedad");
          break;
      }}
    return especialidades;
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes));
