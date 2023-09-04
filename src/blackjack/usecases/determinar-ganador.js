export const determinarGanador = (puntosJugadores)=> {

    //Usamos desectructuración para obtener los puntos de los jugadores en el array 
    const [puntosMinimos, puntosOrdenador] = puntosJugadores;

    // Primero se termina de ejecutar cualquier otro código previo y luego se ejecutan las condiciones dentro del setTimeOut
    setTimeout ( () => { 
        if(puntosMinimos === puntosOrdenador){
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
        alert('Computadora gana');
        }
        else if (puntosOrdenador > 21){
            alert('jugador gana');
        } else if (puntosOrdenador > puntosMinimos && puntosMinimos < 21){
            alert('Computadora gana');
        }
    }, 40);
}