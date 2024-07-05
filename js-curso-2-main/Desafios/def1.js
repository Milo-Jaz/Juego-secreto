// Mensaje de bienvenida
function mensajeInicial () {
    console.log("Hola mundo") ;
}

// Mensaje de bienvenida con nombre
function nombre (nombreInical) {
    console.log(`Hola ${nombreInical}`) ;
}

// Promedio de tres números
function promedio (n1,n2,n3) {
    n1 = parseInt(n1) ;
    n2 = parseInt(n2) ;
    n3 = parseInt(n3) ;
    prom = (n1+n2+n3)/3 ;
    console.log(prom) ;
    return prom
}

// El número mayor entre dos valores
function mayor (n4,n5) {
    if (n4 > n5) {
        console.log(`El número mayor es ${n4}`) ;
    } else {
        console.log(`El número mayor es ${n5}`) ;
    }
}

// multiplicación de un número por si mismo
function factor (n6) {
    n6 = parseInt(n6) ;
    sol = n6*n6 ;
    console.log(sol)
}

// Función IMC
function IMC (metros,kilos) {
    let metros = parseInt(metros)
    let kilos = parseInt(kilos)
    var IMC = kilos/(metros*metros)
    return IMC
}


// Factorial de un número
let f = 1; 
function factorial(n) {
    while(n>0){
        f = (f)*n ;
        n--
    }
    return f
} 

let n = 4
let fac = factorial(n) ; 
console.log(`El resultado es ${fac}`)

// ÁREA Y PERÍMETRO 
function dimensionesDeSala (alto,ancho){
    let a = parseInt(alto) ;
    let b = parseInt(ancho) ;
    let area = a*b
    let perímetro = 2*a+2*b
    console.log(`El área es ${area}`)
    console.log(`El perímetro es ${perímetro}`)
    return area,perímetro 
}

let alto = 2
let ancho = 3
let a = dimensionesDeSala(alto,ancho) 

/* 
function ArPer(b, h){
  area = b*h;
  per = (2*b)+(2*h);
  return {area:area, perimetro: per};
 
}

base = 2;
altura = 3;
let results = ArPer(base, altura);
console.log(results)
*/

// Valor de dólar a peso
function conversionMoneda (dolar) {
    let peso = dolar*18.09
    console.log(`La conversión de ${dolar} dolares a pesos es $${peso.toFixed(2)}`)
    return peso
  }
  
  d = 3
  a = conversionMoneda(d)


// Área y perímetro de un circulo
function dimencionesCirculares (radio) {
    let r = parseInt(radio) ;
    area = 3.14*r*r ;
    perimetro = 3.14*2*r ; 
    console.log(`El área es ${area.toFixed(2)} y el perímetro es ${perimetro.toFixed(2)}`) ;
    return area,perimetro
  }
  
  rad = 3;
  a = dimencionesCirculares(rad)

  // Tablas de multiplicar
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
 
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);


  // Lista vacía 
let listaGenerica = [] ;
console.log(listaGenerica) ;

// Lista lenguajes de programación 
let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'] ;
listaLenguajes.push('Java','Ruby','GoLang') ;
console.log(listaLenguajes)

function mostrarlistaLenguajes () {
  for ( let i=0 ; i<listaLenguajes.length ; i++) {
    console.log(listaLenguajes[i])
  }
}

function mostrarlistaLenguajesInvertidos () {
  for ( let i=listaLenguajes.length ; i>=0 ; i--) {
    console.log(listaLenguajes[i])
  }
}

mostrarlistaLenguajes();
mostrarlistaLenguajesInvertidos() ;


// Promedio de numeros 
function calcularPromedio (lista) {
    let suma = 0
    for ( let i = 0 ; i < lista.length ; i ++) {
      suma += lista[i] ;
    }
    let promedio = suma/lista.length ;
    return promedio 
  }
  
  let numeros = [1,2,3,4,5,6,7,8] ;
  let promedio = calcularPromedio(numeros) ;
  console.log(promedio)

  
  // función mayoy y menor en una lista
  function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);


  // Suma de todos los elementos en una lista 
function sumaLista (lista2) {
    suma = 0;
    for (i=0 ; i<lista2.length ; i++) {
      suma += lista2[i] ; 
    }
    return suma 
  }
  
  a = [1,2,3,4,5,6] ;
  b = sumaLista(a) ;
  console.log(`Suma: ${b}`)

  // Buscar un numero en una lista 
function buscarNumero (lista3,p) {
    if (lista3.includes(p)) {
      for ( i = 0 ; i < lista3.length ; i++ ) {
        if (lista3[i] === p)
         return i
      }
    } else{
      return -1
    } 
  }
  
  a = [1,2,3,4,5,6] ;
  b = 7 ;
  let num = buscarNumero(a,b)
  console.log(num)

  // Buscar un numero en una lista 
function buscarNumero (lista3,p) {
    if (lista3.includes(p)) {
      for ( i = 0 ; i < lista3.length ; i++ ) {
        if (lista3[i] === p)
         return i
      }
    } else{
      return -1
    } 
  }
  
  a = [1,2,3,4,5,6] ;
  b = 7 ;
  let num2 = buscarNumero(a,b)
  console.log(num2)

  // Cuadrado de cada número
function cuadrados(lista) {
    let nuevaLista = []
    for (i=0 ; i < lista.length ; i++) {
      n = lista[i]*lista[i]
      //console.log(`El cuadrado de ${lista[i]} es ${n}`)
      nuevaLista.push(n)
    }
    console.log(nuevaLista)
  }
  
  a = [1,2,3,4]
  cuad = cuadrados(a);
