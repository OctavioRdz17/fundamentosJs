el punto y coma solo se utiliza cuando
se tienen que poner arrays sin nombre
y js no las intermpreta

o con IIEE


//ejemplo donde no funciona no poner ;
var nombre='tavo'
(function (){
  console.log(`hola ${nombre}`)
})()


// este ejemplo si funcviona
var nombre='tavo';
(function (){
  console.log(`hola ${nombre}`)
})()
