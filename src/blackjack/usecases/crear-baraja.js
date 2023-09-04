import _ from 'underscore'

/**
 * Esta función crea un deck
 * @param {Array<String>} tipoCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tipoCartas, cartasEspeciales) => {
    
    if (!tipoCartas || tipoCartas.length === 0) throw new Error('tipoCartas es obligatorio como un  arreglo de strings');
    if (!cartasEspeciales || cartasEspeciales.length === 0) throw new Error('cartasEspeciales es obligatorio como un arreglo de strings');
    

    let deck         = [];
    deck = []; // Reiniciar deck

    for(let i = 2; i <= 10; i++){
        for (let tipoCarta of tipoCartas){
            deck.push( i + tipoCarta );
        }
    }
    
    for (let tipoCarta of tipoCartas){
        for(let especial of cartasEspeciales){
            deck.push(especial + tipoCarta);
        }
    }
    return _.shuffle (deck);
}






// En caso de requerir exportar algo por defecto, se puede hacer de la siguiente manera. 
// export default crearDeck;