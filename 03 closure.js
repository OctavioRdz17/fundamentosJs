//closure

function saludaFamilia(apeido){
  return function saludaMiembro(nombre){
    console.log(`Hola ${nombre} ${apeido}`);
      }
}

const gomez = saludaFamilia ('Gomez')
const perez = saludaFamilia('Perez')
const rodriguez = saludaFamilia('Rodriguez')

gomez("Sasha")
gomez("laura")
gomez("Monica")

perez("Juan")
perez("Rodrigo")

rodriguez ("Ricardo")
rodriguez ("Diana")

//ejercicio

function escribirPrefijo(prefijo){
  return  function escribirPalabra(palabra){
    console.log(`La palabra es ${prefijo}${palabra}`);
  }
}

const prefijoIn = escribirPrefijo('In')
const prefijoRe = escribirPrefijo('Re')

prefijoRe ('copado')
prefijoRe ('pendejo')

prefijoIn ('parable')
prefijoIn ('paciente')

// arrow

const escribirPrefijo = (prefijo) => escribirPalabra = (palabra) => console.log(`La palabra es ${prefijo}${palabra}`);

const prefijoIn = escribirPrefijo('In')
const prefijoRe = escribirPrefijo('Re')

prefijoRe ('copado')
prefijoRe ('pendejo')

prefijoIn ('parable')
prefijoIn ('paciente')
