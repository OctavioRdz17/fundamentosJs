const Punto = {
  init : function init (x,y){
    this.x = x;
    this.y = y;
    },
  moverEnX : function moverEnX (x){
    this.x += x;
    },
  moverEnY :  function moverEnY (y){
    this.y += y;
    },
  distancia:function distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;
    return Math.sqrt (x*x+y*y).toFixed(2)
    }

  }
  //aqui se crean las variables con el formato de objeto Punto
let p1 = Object.create(Punto)
let p2 = Object.create(Punto)
//se le agregan los valores alas variables atraves de la function
//que se escribio init (ojo se necesita crear una funcion para asignar los valores en este metodo)
p1.init (0,4);
p2.init (3,0);

console.log(p1.distancia(p2));
console.log(p1);
p1.moverEnX(10);
console.log(p1);
console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
console.log(p2);
p2.moverEnY(-4);
console.log(p2);
console.log(p1.distancia(p2));
