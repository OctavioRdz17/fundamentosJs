//https://babeljs.io/repl/
function handleError (err){
  console.log(`Request failed ${err}`);
}
async function getLuke(){
  try {
    const response = await fetch('https://www.swapi.co/api/people/1/')
    const luke = await response.json()
    const responseHomerworld = await fetch(luke.homeworld)
    luke.homeworld = await responseHomerworld.json()
    const responseVehicles = await fetch (luke.vehicles[0])
    luke.vehicles = responseVehicles
    console.log(`${luke.name} nacio en ${luke.homeworld.name} y manejaba una ${luke.vehicles.name}`);
  } catch (err) {
    handleError(err)
  }
}
getLuke()
