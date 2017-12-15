class Toggable {
  constructor(el) {
    //inicializar estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.el.addEventListener('click',this.onClick.bind(this))
  }
  onClick(ev){
    console.log('Esto es un this dentro de onclick ', this);
    this.activated = !this.activated //cambia estado interno
    this.toggleText() // llamar a toggleText
  }
  toggleText(){
  this.el.innerHTML = this.activated ?  'On' : 'Off' //cambia el texto
  }
}


const button = document.getElementById('boton')
const miBoton = new Toggable (button)


//

function saludar (nombre, apeido){
console.log(`hola ${nombre} ${apeido}!`);
}

saludar('sasha','perez')

const saludarSashas = saludar.bind(null,'Sasha')

saludarSashas("Ortiz" )
