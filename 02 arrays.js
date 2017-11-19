
//forma facil
function suma(n1,n2,n3,n4,n5){
  return n1+n2+n3+n4+n5
}
//con tres puntos se activa el spread operator(desarmar)


//esta es la forma de crear la suma con un ciclo for
function suma(...numeros){
      let acum = 0
      for (var i = 0; i < numeros.length; i++) {
        acum+=numeros[i]
      }
       return acum
}


//esta es la forma de crear con la funcion
//reduce
function suma(...numeros){
    return  numeros.reduce(function (acum,numero){// ocupa dos
        acum += numero
        return acum
      },0) //este es el valor inicial del acumulador
    }
suma (3,3,4,5)

//escrita con arrow function suma
let suma = (...numeros)=> numeros.reduce((acum,numero)=>acum += numero,0)
suma (3,3,4,5)
//resta
let resta = (...numeros)=> numeros.reduce((acum,numero)=>acum -= numero,0)
resta(100,50,5)
//multiplicacion
let multi = (...numeros)=> numeros.reduce((acum,numero)=>acum = acum * numero,1)
multi(2,3,4)
//divicion
let divi = (...numeros)=> numeros.reduce((acum,numero) => acum = acum / numero,1)
divi(2,2)




// metodo para general el doble de la cantidad ingresada por el array
function dobles (...numeros){
  const resultado = []
  for (var i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i]*2)
  }
  return resultado
}

//se puede escribir mejor este codigo
function dobles(...numeros){
  return numeros.map(function (numero){
    return numero*2
  })
  }
// esto se puede crear con arrow function
//quedaria de la siguiente manera

const dobles = (...numeros)=>numeros.map(numero => numero*2)
dobles (2,4,5,56)
//misma funcion para dividir entre dos
const mitades = (...numeros)=> numeros.map(numero=>numero/2)
mitades (10,5,20,30)

//sumando a cada numero 3
const sumNum = (...numeros) => numeros.map(numero => numero + 3 )
sumNum (10,3,45)

//sumando el numero anterior
let guardadito = 0
const sumNum = (...numeros) => numeros.map(numero => {
  numero += guardadito
  guardadito=numero
  return numero
}
 )
sumNum (10,10,5,5)


//filter para encontrar los numeros pares de un array

function pares(...numeros){
  const resultado = []
  const length = numeros.length
  for (let i = 0; i < length; i++) {
    const numero = numeros [i]
    if (numero%2 == 0) {
      resultado.push(numero)
    }
  }
  return resultado
}
pares (3,56,78,23,12453,3243454)
//funciona de poca madre pero no es la manera mas corta de hacerlo

//tambine se puede escribir de la siguiente manera
function pares(...numeros){
return  numeros.filter( numero=> ){  //retorna true o false de la funcion
    return numero%2 == 0
  })
}
pares (3,56,78,23,12453,3243454)
//las funciones de los array suelen ejecutar una funcion
//para cada uno de los elemento

//reescribiendo de mejor manera
//
const pares = (...numeros) => numeros.filter(numero =>numero%2 == 0);
pares (3,56,78,23,12453,3243454) // resultado (56,78,3243454)

//menor que 10
const menorQue10 = (...numeros) => numeros.filter(numero => numero < 10)
menorQue10(8,9,10,11,12) // resultado (8,9)


//agregando condicionales
const divisible = (...numeros) => numeros.filter(numero=>numero % 3 ==0 && numero % 5==0)
divisible (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,30,45,)
//resultado (15,30,45)

// menor


//la escribi pero no la entiendo =(
