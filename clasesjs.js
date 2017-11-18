//tercer manera de crear clases sintaxis SUGAR
//Creado en ES6 o ES2015
class Punto { //funciona como el prototype
  constructor(x,y) {
    this.x = x
    this.y = y
      }
  moverEnX(x){//pero aqui directamente se agregan las funciones
    this.x += x
      }
  moverEnY(y){
    this.y+= y
      }
  distancia(p){
    const x = this.x - p.x;
    const y = this.y - p.y;
    return Math.sqrt(x*x+y*y).toFixed(2)
  }
}
//se declaran las variables con el formato objeto
  const p1 = new Punto(0,4)//y se asignan los valores directamente
  const p2 = new Punto(3,0)

  console.log(p1.distancia(p2));
  p1.moverEnX(10);
  console.log(p1.distancia(p2));
  console.log(p2.distancia(p1));
  p2.moverEnY(-4);
  console.log(p1.distancia(p2));
