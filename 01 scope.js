// Se demuestra como las variables solo viven donde son creadas

var nombre = "tavo"

function saludar(){
  if (true) {
    var nombre = "Erick"//al declarar la variable dentro de la funcion solo vive en esta funcion
      }
  console.log(`Hola ${nombre}`)//pero sino se declara remplza la variable con el scope superior
}
saludar()
console.log(`La variable nombre vale ${nombre}`);
function saludar10(nombre){
  for (var i = 0; i < 10; i++) {//cuando se utiliza let solovide dentro de estas llaves la variable
      console.log(`Saludos ${nombre}`);
   }
    console.log(`El valor de i es ${i}`); //manda error con let ya que no esta definida
    //pero puede mandar resultado si se utiliza var ya que sigue vive la variable en la funcion
}
console.log(`El valor de i fuera de la funcion con var es ${i}`); //manda error con let ya que no esta definida

saludar10("Joaquin")
