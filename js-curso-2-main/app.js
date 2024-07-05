// Cambiar el contenido de la etiqueta 1
let et1 = document.querySelector('h1') ;
et1.innerHTML = " Hora del desafío" ;

function fun1() {
    console.log("El botón fue ciclado") ;
}

function fun2() {
    alert ("Yo amo JS")
}

function fun3() {
    nombreCiudad= prompt("Escriba el nombre de una ciudad de brasil") ;
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`)
}

function fun4() {
    let numero1 = parseInt(prompt("Digite un número"));
    let numero2 = parseInt(prompt("Digite otro número"));
    let suma = numero1 + numero2 ;
    alert(`El resultado de la suma de ${numero1} y ${numero2} es: ${suma}`);
}
