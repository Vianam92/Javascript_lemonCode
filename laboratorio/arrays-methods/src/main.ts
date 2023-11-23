import { NumeroPacientesPorEspecialidad, Pacientes, pacientes } from "./model";

//especialidad Pediatria

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

//especialidad Pediatria y menos de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return obtenPacientesAsignadosAPediatria(pacientes).filter(
    (paciente) => paciente.edad < 10
  );
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  activarProtocolo = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let findPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  const removePediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad !== "Pediatra"
  );
  return findPediatria
    .map((pediatria: any) => {
      return {
        ...pediatria,
        especialidad: "Medico de Familia",
      };
    })
    .concat(removePediatria);
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//Apartado 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const especialidad = pacientes.some(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return especialidad;
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

  pacientes.forEach((paciente) => {
    switch (paciente.especialidad) {
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
    }
  });
  return especialidades;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
