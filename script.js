'use strict'

/* Variáveis */
var hora = 0;
var minuto = 0;
var segundo = 0;

var tempo = 1000;
var cronometro;  
var interval;

/* Funções */

function zeroDigit(digit){  // Adiciona um 0 antes do digito caso ele seja de 0 a 9. //
    if (digit < 10){
        return ('0' + digit)
    } else{
        return (digit)
    }
}

function start(){  // Inicia o cronômetro //
    clearInterval (interval)
    interval = setInterval(watch, tempo) // Valor em milissegundos //
}

function pause(){  // Pausa o cronômetro //
    clearInterval (interval)
}

function stop(){  // Para o cronômetro //
    clearInterval (interval)
    segundo = 0
    minuto = 0
    hora = 0
    document.getElementById ('watch').innerText = '00:00:00'
}

function watch(){  // Mudança de digitos do cronômetro //
    segundo++
    if (segundo == 60){
        minuto++
        segundo = 0
        if(minuto == 60){
            hora++
            minuto = 0
        }
    }
    
    document.getElementById('watch').innerText = zeroDigit(hora) + ':' + zeroDigit(minuto) + ':' + zeroDigit(segundo)  // Montagem do cronômetro //
}
