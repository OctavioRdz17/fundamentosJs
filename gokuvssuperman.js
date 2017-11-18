let vidaGoku =100
let vidaSuperman =100

const minPower = 5
const maxPower = 12

let round = 1

const ambosSiguenVivos=()=>vidaGoku>0&&vidaSuperman>0

while(ambosSiguenVivos()){
  console.log(`Round ${round}`)
  let golpeGoku = aleatorio(minPower,maxPower);
  let golpeSuperman = aleatorio(minPower,maxPower);
if (golpeGoku>=golpeSuperman){
  console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}.`);
  vidaSuperman -= golpeGoku
  console.log(`Superman queda con vida de ${vidaSuperman}`);
}
else {
  console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}.`);
  vidaGoku -= golpeSuperman
  console.log(`Goku queda con vida de ${vidaGoku}`);
}
round++
}
if (vidaGoku>0){
  console.log(`Goku gano la batalla con una vida de ${vidaGoku}`);
  alert(`Goku gano la batalla con una vida de ${vidaGoku}. En el round ${round}`);

}
else {
  console.log(`Superman gano la batalla con una vida de ${vidaSuperman}`);
  alert(`Superman gano la batalla con una vida de ${vidaSuperman}. En el round ${round}`);
}

function aleatorio(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}
