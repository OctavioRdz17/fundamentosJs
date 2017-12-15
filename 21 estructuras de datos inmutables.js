// === triple igual para comparar objetos
let tavo = {nombre: 'tavo',apeido:'rodriguez ',edad=32}
let tavoo = {nombre: 'tavo',apeido:'rodriguez ',edad=32}

console.clear()

class Persona{
  constructor( nombre, edad ){
    this.nombre = nombre
    this.edad = edad
  }
}
Persona.prototype.clone = function(){
  // Persona pudiera ser Object pero no es recomendable modificar el prototype de los tipos de objeto intrínsecos de JS
  returnObject.assign({},this)
}

const julio = new Persona('Julio',41)
const julian = julio.clone()

const cumpleanos = function( persona ){
  return persona.edad ++
}

console.log ( julio)
console.log ( cumpleanos(julian) )
console.log ( julio, julian )
