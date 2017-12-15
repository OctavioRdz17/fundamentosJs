setTimeout (function callback(){
  console.log ('ya el tiempo')
},0);

console.log('Hola');


//con estas fucinoes se ven las caracteristicas del
//llamdo de pila de los navegasdores la llamar javascript

setTimeout(function callback(){
  console.log('a');
},1000)

for (var i = 0; i < 999999999; i++) {

}
console.log('B');

// importantes las operaciones asincronas tienes que resudirlas
// delegarlo a funcioines asincronas para no cargar la cola de la pila de js

function get (URL, callback){

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
  const DONE = 4
  const OK = 200
  if (this.readyState === DONE){
    if(this.status === OK ){
     callback(null,JSON.parse(this.responseText)) //todo ok
      }else{
      callback(new Error(`Se produjo un error al revisar el request ${this.status}`))
      //hubo error
    }
  }
}

xhr.open('GET',URL);
xhr.send(null);
}

function _handleError(){
  console.log(`Resquest failed ${err}`)
}

get('https://swapi.co/api/people/1/',function onResponse(err,luke){
  if (err) return _handleError(err)

  get (luke.homeworld,function onHommeworldResponse(err,homeworld){
    if (err) return _handleError(err)

    luke.homeworld = homeworld
    console.log (`${luke.name} nacio en ${luke.homeworld.name}`)

  })

})
