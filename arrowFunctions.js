//Área del triangulo
let base =5;
let altura =7;

let triangleArea =  (base,altura) =>  base * altura / 2;
console.log(`El area de un triangulo de base ${base} altura ${altura} es: ${triangleArea(base,altura)}`) ;

//Área del Circulo

let radio= 5

let circleArea = (radio) => Math.PI * Math.pow(radio,2)
console.log(`El area del circulo de radio ${radio} es: ${circleArea(radio)}`);
