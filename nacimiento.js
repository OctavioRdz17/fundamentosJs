//cuanto tiempo paso desde mi nacimiento
//que dia es que cae mi cumpleaños

const nacimiento = new Date(1985,3,08)//esto es un objeto
const hoy = new Date()
const tiempo = hoy - nacimiento
const tiempoSegundos=tiempo/1000
const tiempoMin =tiempoSegundos/60
const tiempoHoras = tiempoMin/60
const tiempoDias =tiempoHoras/24
const nextBirthday = new Date(hoy.getYear()+1,nacimiento.getMonth(),nacimiento.getDate())
const diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
]
console.log(diasSemana[(nextBirthday.getDay())-1])
