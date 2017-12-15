//promesas de call back
//ya estan soportadas nativamente

const promise = new Promise(function (resolve, rejected){
  setTimeout(function(){
    reject(new Error(`Se produjo un error`))
  },1000) //codigo asincrono para que funcione la promesa
})

promise
  .then (function (){

  })
  .catch(function(err){

  })
function get (URL, callback){
  const xhr =
}

// aqui cambia a otro codigo
// asi se aplican las promesas

function get(URL){
  //new promise recibe una funcion
  return new Promise ((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      const DONE = 4
  			const OK = 200
  			if (this.readyState === DONE) {
  				if(this.status === OK){
  					//Todo OK
  					resolve(JSON.parse(this.responseText)) //no se ocupa poner el null del callback
  				}else {
  					//Hubo un error
  					reject(newError(`Se produjo un error al realizar el request ${this.status}`))
  				}
  			}
  		}
  		xhr.open('GET', URL);
  		xhr.send(null);
  	})
  }
  /* Funcion para tratar el error */
  functionhandleError(err){
  	console.log(`Request failed: ${err}`)
  }
  let luke
  //llamada al metodo
  get('http://www.swapi.co/api/people/1/')
  	//lamada a funcion normal
  	.then(function(response){
  		luke = response
  		//promesa
  		return get(luke.homeworld)
  	})
  	//llamada a funcion con arrow functions
  	.then((homeworld)=>{
  		luke.homeworld = homeworld
  		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  	})
  	.catch((err)=> handleError(err))



// segunda vez que escribo elcodigo

const promise = new Promise ((resolve,reject)=> {
  setTimeout(funcion(){
    reject(new Error('Se produjo un error'))
  },1000)
})
promise
  .then(function(){// codigo para cuando todo esta bien

  })
  .catch(function (err){ // codigo para el error
  })

// promesas

function get(URL){
  return new Promise((resolve,reject)=>{ //aqui se recibe una funcion
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (){
      const DONE = 4
      const OK = 200
      if (this.readyState===DONE) {
        if (this.status===OK) {
          resolve(JSON.parse(this.responseText))
        }
        else {
          reject(new Error(`Se produjo un error al realizar el status: ${this.status}`))
        }
      }
    }
    xhr.open('GET',URL);
    xhr.send(null);
    })
}
function handleError(err){
  console.log(`Request failed: ${err}`)
  }
let luke
get('https://www.swapi.co/api/people/1/')//llamada al metodo
  .then ((response)=>{
    luke = response
    return get(luke.homeworld)
    })
    .then ((homeworld)=>{
      luke.homeworld = homeworld
      return get(luke.vehicles)
          })
    .then((vehiculo)=>{
      console.log(luke);
      luke.vehicles = vehiculo
      console.log(`${luke.name} nacio en ${luke.homeworld.name} y manejaba una ${luke.vehicles.name}`);
    })
    .catch((err)=>handleError(err))

























.
