import { NumeroPacientesPorEspecialidad, Pacientes, pacientes } from './model';

//especialidad Pediatria

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra")
};

//especialidad Pediatria y menos de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
   return obtenPacientesAsignadosAPediatria(pacientes).filter(paciente => paciente.edad < 10)
  };

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
  
    activarProtocolo = pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)
  
    return activarProtocolo;
  };

  console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3
const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let findPediatria: Pacientes[] = pacientes.filter(paciente => paciente.especialidad === "Pediatra");
    const removePediatria: Pacientes[] = pacientes.filter(paciente => paciente.especialidad !== "Pediatra");
    return findPediatria.map((pediatria: any) => {
        return {
            ...pediatria,
            especialidad: "Medico de Familia"
        }
    }).concat(removePediatria);
    
  };

  console.log(reasignaPacientesAMedicoFamilia(pacientes));

  //Apartado 4

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    const especialidad = pacientes.filter(paciente => paciente.especialidad === "Pediatra");
    if(especialidad.length){
        return true;
    }
    return false;
  };

  console.log(HayPacientesDePediatria(pacientes));

  //Apartado 5
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    const  especialidad: any = pacientes.forEach((paciente) => {
        especialidad[paciente.especialidad] = especialidad[paciente.especialidad] + 1 || 1;
    })
    return especialidad;
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes));

