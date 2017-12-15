class Persona {
  constructor(nombre,amigos=[]) {
  this.nombre = nombre
  this.amigos = amigos
  }
  listarAmigos (){
    const _this = this
    this.amigos.forEach(function nombrarAmigos(amigo){
    console.log(`hola mi nombre ${_this.nombre} y soy amigo de ${amigo}`);
    })
  }
}
const  sasha = new Persona('sasha',['pedro','juan','jose'])
sasha.nombre


//otra forma de declarar esta function
class Persona {
  constructor(nombre,amigos=[]) {
  this.nombre = nombre
  this.amigos = amigos
  }
  listarAmigos (){
    this.amigos.forEach(function nombrarAmigos(amigo){
    console.log(`hola mi nombre ${this.nombre} y soy amigo de ${amigo}`);
  }.bind(this))
  }
}
const  sasha = new Persona('sasha',['pedro','juan','jose'])
sasha.listarAmigos()

//tercer forma de ver este ejemplo
//las arrow function ya inclyen el bind

class Persona {
  constructor(nombre,amigos=[]) {
  this.nombre = nombre
  this.amigos = amigos
  }
  listarAmigos (){
    this.amigos.forEach((amigo)=>
    console.log(`hola mi nombre ${this.nombre} y soy amigo de ${amigo}`))
    }
}
const  sasha = new Persona('sasha',['pedro','juan','jose'])
sasha.listarAmigos()
