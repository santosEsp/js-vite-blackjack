/**
 * Función para tomar una carta del Deck
 * @param {Array<String>} deck Ejemplo: ['AS', '2C', '5D', 'JK', ...]
 * @returns {String} Retorna alguna carta aleatoria tomda del deck
 */

export const pedirCarta = (deck) =>{

    if (!deck || deck.length === 0){
        throw 'No hay más cartas';
    }
    return deck.shift();
}