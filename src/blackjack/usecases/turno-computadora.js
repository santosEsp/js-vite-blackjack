 import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./index-imports";

/**
 * 
 * @param {Number} puntosMinimos Puntos de referencia para que la computadora gane
 * @param {Array<Number>} puntosJugadores Puntos de los jugadores 
 * @param {HTMLElement} puntosHTML Lugar donde se van a mostrar los puntos HTML
 * @param {Array<String>} deck La baraja completa
 */
 // Turno de la computadora
  export const turnoComputadora = (puntosMinimos, puntosJugadores, divCartasJugadores,puntosHTML,deck = [])=>{
    // NOTA CUANDO COPIAMOS BLOQUES DE CÓDIGO SIN IMPORTAR SU TAMAÑO
    // ENTONCES ES CONVENIENTE CREAR UNA FUNCIÓN PARA ESE BLOQUE DE CÓDIGO QUE HACE UNA FUNCIÓN ESPECÍFICA. 

    if (!puntosMinimos) throw new Error ('Puntos mínimos son necesarios');
    if (!deck) throw new Error ('El deck es necesario');

    let puntosOrdenador = 0;

    do {        
        const carta = pedirCarta(deck); 
        puntosOrdenador = acumularPuntos(puntosJugadores.length - 1, carta, puntosHTML, puntosJugadores);
        
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while((puntosOrdenador < puntosMinimos) && puntosMinimos <= 21);


  determinarGanador(puntosJugadores);

}