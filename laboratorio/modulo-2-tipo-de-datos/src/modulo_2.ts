export const dinner = (ticket: number, amigos: number, bebidas: number) => {
    const diferenciaBebidas = ticket - bebidas;
    const pagoCadaAmigo = diferenciaBebidas / amigos;
    return `cada amigo debe pagar ${Math.floor(pagoCadaAmigo)}€ y el cumpleañero ${Math.floor(bebidas + pagoCadaAmigo)}$`
}