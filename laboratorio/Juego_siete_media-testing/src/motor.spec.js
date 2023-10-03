import {messages} from './motor';
import { partida } from "./model";

describe("", () => {
    it("Deberia devolver has ganado", () => {
        const message = "¡ Lo has clavado! ¡Enhorabuena!";

        const ganador = partida.pointsUser === 7.5;
        const resultado = messages();
        if(ganador){
            expect(resultado).toBe(message);
        }

        
    })
})