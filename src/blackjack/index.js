
import _ from 'underscore'
import {crearDeck, pedirCarta, crearCarta, acumularPuntos, turnoComputadora} from './usecases/index-imports';

// 2C = Two of clubs (Tréboles)
// 2D = Two of diamonds (Diamantes)
// 2H = Two of hearts (Corazones)
// 2S = Two of spades (Espadas)

// Juego de blackjack. Objetivo : obtener 21 puntos o estar lo más cerca sin pasarse o se pierde la partida. 

const miModulo = (()=>{
  'use strict'
    let deck           = [];
  const tipoCartas     = ['C', 'D', 'H', 'S'],
        cartaEspecial  = ['A','J', 'Q', 'K'];

  // Referencias Botones HTML
  const   btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');           

  const   puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');
  // Puntos del juego
  let puntosJugadores = [];

  // Función para inicializar el Deck 
  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipoCartas, cartaEspecial);
      puntosJugadores = [];

       for (let i = 0; i < numJugadores ; i++) {
          puntosJugadores.push(0);
       }
       // Por cada elemento del arreglo se ejecuta la instrucción
       puntosHTML.forEach(elem => elem.innerText = 0);

       divCartasJugadores.forEach (elem => elem.innerHTML = '');
      // divCartasJugador.innerHTML = '';
      // divCartasComputadora.innerHTML = '';



  }


deck = crearDeck(tipoCartas, cartaEspecial);

  // Eventos
  btnPedir.addEventListener('click', () => {
      
      const carta = pedirCarta(deck); 
      // Sumando puntos del jugador 
      const puntosJugador = acumularPuntos(0, carta, puntosHTML, puntosJugadores);
      // puntosJugador = puntosJugador + valorCarta(carta);
      // puntosHTML[0].innerText = puntosJugador;
      crearCarta(carta, 0, divCartasJugadores);

      if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores,divCartasJugadores,puntosHTML, deck);

      } else if (puntosJugador === 21) {
        turnoComputadora(puntosJugador, puntosJugadores,divCartasJugadores,puntosHTML, deck);
          btnPedir.disabled = true;
          btnDetener.disabled = true;
      }
  }); 

  btnDetener.addEventListener('click', ()=>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], puntosJugadores,divCartasJugadores,puntosHTML, deck);
  });

  btnNuevo.addEventListener('click', ()=>{
      btnPedir.disabled = false;
      btnDetener.disabled = false;

      inicializarJuego();
      
  });

  // Antes de que termine el módulo, regresar algo. La función anónima autoinvocada debe regresar algo. 
  
  return {
    nuevoJuego : inicializarJuego 
  }
})();

