function platzom (str){
  let translation =str;
  //Si la palabra termina en ar se le quitan essos dos caracteres
  if (str.toLowerCase().endsWith("ar")) {
    translation=str.slice(0,-2)
  }
  //Si la palabra empieza con z se le agrega pe
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe"
    }
  //si la palabra traducida tiene mas de 10 letras se corta a la mitad y se le agrega un guion
  if (translation.length >= 10) {
      const firstHalf = translation.slice (0,Math.floor(translation.length/2));
      const secondHalf = translation.slice(Math.floor(translation.length/2),);
      translation = firstHalf+"-"+secondHalf
        }
  // Si la palabra es un palindromo
  //no hacer nada de lo anterior
  //y se intercalar las letras mayusculas con minusculas
const patras = (str) => str.split("").reverse().join("")
function minMay(str){
  const lenght = str.length
  let translation=""
  let capitalize =true
  for (let i = 0; i < lenght; i++) {
    const char = str.charAt(i)

    capitalize = !capitalize
      }
return translation
}
  if (str==patras(str)) {
    return minMay(str)

  }


    return translation
  }



console.log(platzom("Zape")); //Zapepe
console.log(platzom("Programar")); //Program
console.log(platzom("Zarpar"));//Zarppe
console.log(platzom("Abecedarioss"));//Abece-dario
console.log(platzom("sometemos")); //SoMeTeMoS
