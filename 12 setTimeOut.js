// como hacer set time out
// setTimeout(funcion,milisegundos)
setTimeout(()=>{
alert('Que esta pasandaaaaa');

}
  , 5000)


  <!DOCTYPE html>
<html>
  <head>
    <metacharset="utf-8">
    <title>setInterval</title>
  </head>
  <body>
    <h1id="timer">Ha pasado 0 segundos</h1>

    <scripttype="text/javascript">
      const timer = document.getElementById('timer')
      let counter = 0
      setInterval( () => {
        counter++
        let mensaje = (counter === 1) ? `Ha pasado ${counter} segundo` : `Han pasado ${counter} segundos`;
        timer.textContent = mensaje;
      }, 1000)
    </script>
  </body>
</html>
