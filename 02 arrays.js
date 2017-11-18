/*
forma facil
function suma(n1,n2,n3,n4,n5){
  return n1+n2+n3+n4+n5
}
con tres puntos se activa el spread operator(desarmar)
*/
function suma(...operandos){
  console.log(operandos)
    let acumulador
    for (let i = 0; i < operandos.length; i++) {
     acumulador = acumulador +  operandos[i]
    }
    console.log(acumulador);
  return acumulador
}
suma(4,8,12,8954,7)
