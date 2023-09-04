import {valorCarta} from './valor-carta'
/**
 * 
 * @param {Number} turno Recibe el número del turno del jugador
 * @param {String} carta Recibe el nombre de la carta ('2C', '3C', 'JK')
 * @returns Regresa el total de puntos acumulados 
 */



export const acumularPuntos = (turno, carta, puntosHTML,puntosJugadores ) => {
    if(!carta ) throw new Error ('carta faltante'); 
    if(isNaN(turno) ) throw new Error ('Turno faltante');

    // Sumando los puntos de los jugadores   
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    
    return puntosJugadores[turno];
}