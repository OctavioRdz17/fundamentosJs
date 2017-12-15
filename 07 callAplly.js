// asi funciona para call
const tavo = {
  nombre:'Octavio',
  apeido:'Rodriguez'
}

function saludar (veces,mayusculas){
  let str = `Hola ${this.nombre} ${this.apeido}!`
  str = mayusculas ? str.toUpperCase() : str
  for (let i = 0 ;i < veces ; i++){
    console.log(str)
  }
}

saludar.call(tavo,3,false) // cal esta dividido de la siguiente manera
// 1er de donde sale el contexto
// luego las variables divididas por comas

// para la funcion apply
const tavo = {
  nombre:'Octavio',
  apeido:'Rodriguez'
}

function saludar (veces,mayusculas){
  let str = `Hola ${this.nombre} ${this.apeido}!`
  str = mayusculas ? str.toUpperCase() : str
  for (let i = 0 ;i < veces ; i++){
    console.log(str)
  }
}
const pram = [3,false]
saludar.apply(tavo,pram)
//casi lo mismo pero se pasan los valores por un array
