/**
 * Toma la carta y convierte su valor en un valor numérico
 * @param {String} carta Ejemplo: '2C', '2D', 'AS'
 * @returns {Number} Retorna el valor numérico de la carta recibida
 */

export const valorCarta = (carta) =>{
    // En JS todos los strings pueden ser trabajados como si fueran un arreglo. 
    const valor = carta.substring(0, carta.length -1);
     // isNaN() Evalua si algo es un número o no. 

    return (isNaN(valor)) ?  //     Regresa true si no es un número. 
            (valor ==='A') ? 11 : 10 
            : valor * 1; // Con el Por 1 se convierte el número de string a numero. 
}