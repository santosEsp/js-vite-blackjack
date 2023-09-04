/**
 * 
 * @param {String} carta Recibe el nombre o identificador de la carta
 * @param {Number} turno Turno del participante en curso
 */

export const crearCarta = (carta , turno, divCartasJugadores) => {
    
    // Crear las cartas , <img class="carta" src="assets/cartas/10D.png" alt="carta.jpg"></img>
    // Creamos el tag img
    const imgCarta = document.createElement('img');
    // Asignamos la ruta de las cartas dinamicamente.
    imgCarta.src = `assets/cartas/${carta}.png`;
    // Agregar clases para la carta
    imgCarta.classList.add('carta');
    // Agregamos nuevos tags dentro del div de cartas del jugador
    divCartasJugadores[turno].append(imgCarta);
}