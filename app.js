let numeroSecreto = 1;
let intentos = 0 ;
let listaNumerosSorteados = [] ;
let numeroMaximo = 10;

condicionesIniciales () ;
//console.log(`numero secreto ${numeroSecreto}`)

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}
                                                                                
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value) ;
    
    /* console.log(typeof(numeroUsuario))
    console.log(typeof(numeroSecreto))
    console.log(numeroUsuario)
    console.log(numeroSecreto === numeroUsuario) */
    //console.log(intentos)


    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos>1) ? 'intentos' : 'intento'}`)
        document.getElementById('reiniciar').removeAttribute('disabled') ; 
    } else {
        // El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', "El número secreto es menor")
        } else {
            asignarTextoElemento('p', "El número secreto es mayor")
        }
        intentos ++ ;
        limpiarCaja () ; 
    }
    return;
}

function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario').value = '' ;
    // valorCaja.value = '' ; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1 ;
    console.log(numeroGenerado) ;
    console.log(listaNumerosSorteados) ;
    // si ya sorteamos todos los númeoros
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else 
    // Si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto() ;
    } else {
        listaNumerosSorteados.push(numeroGenerado) ;
        return numeroGenerado
    }

}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número secreto') ;
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`) ; 
    // generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
     // iniciaizar el número de intentos
     intentos = 1 ;    
}

function reiniciarJuego () {
    // limpiar caja 
    limpiarCaja () ;
    // inicar mensaje de inicio 
    condicionesIniciales () ;
    // deshabilitar el botón 
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}
