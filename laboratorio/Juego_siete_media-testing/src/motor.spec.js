import {messages} from './motor';
import { partida } from "./model";

describe("", () => {
    it("Deberia devolver has ganado", () => {
        const message = "¡ Lo has clavado! ¡Enhorabuena!";

        const resultado = messages();
 
        expect(resultado).toBe(message);
    })
})