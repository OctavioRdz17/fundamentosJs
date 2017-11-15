//Si una persona puede pasar a ver la pelicula segun su edad

const starWars7 = "Star Wars 7: El Despertar de la Fuerza";
const pgStarWars7 = 13;

const nameSasha = `Sacha`
const ageSasha = 26;

const nameSanti = `Santi`
const ageSanti = 12;

let canWatchStarWars7=(name, age)=> {
  if (age>=pgStarWars7) {
    alert(`${name} Puede pasar a ver ${starWars7} `)
  }
  else  {
    if (confirm (`Vienes con algun mayor a ver la pelicula?.
      Presiona Ok para aceptar y Cancelar para `)) {
        alert(`${name} Puede pasar a ver ${starWars7}.
          Aunque su edad es ${age} porque se encuentra acompañadopor un Adulto`)

    }
    else {
      alert(`${name} No puede pasar a ver ${starWars7}.
        tienes ${age} años y necesita tener ${pgStarWars7} `)
      }
  }
}
let name1 = prompt("Hola. ¿Cual es tu nombre?");
let age1 =parseInt(prompt("¿Cuantos años tienes?"));

canWatchStarWars7 (name1,age1);
