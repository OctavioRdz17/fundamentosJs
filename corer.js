const dias =[
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
]

function correr(){
  const min = 5
  const max = 15
  return Math.round (Math.random()*(max-min)+min)
}
let totalKms=0;
let size = dias.length
for (let i = 0; i < dias.length; i++) {
  const kms =correr();
  totalKms += kms;
  console.log(`El día ${i+1} es ${dias[i]} y se corrio ${kms} kms.`)
}
let promedio = totalKms / size;
console.log(`Esta semana se corrio en promedio ${promedio.toFixed(2)}Kms`);
