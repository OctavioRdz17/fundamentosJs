const dias =[
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
]
function aleatorio(min, max)
  {
    return Math.floor(Math.random()*(max-min+1))+min;
  }

let totalKms=0;
let size = dias.length
for (let i = 0; i < size; i++) {
  const kms =aleatorio(5,15);
  totalKms += kms;
  console.log(`El día ${i+1} es ${dias[i]} y se corrio ${kms} kms.`)
}
let promedio = totalKms / size;
console.log(`Esta semana se corrio en promedio ${promedio.toFixed(2)}Kms`);
