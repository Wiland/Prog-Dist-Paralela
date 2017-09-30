/*

  Los integrantes son:

      Wilmer Cordoba Giraldo
      Andrés Felipe López Rivera
      Jhoan Andrés Gutiérrez Osorio


  La página es: http://jsbin.com/
  El cuerpo (HTML) es:

        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>JS Bin</title>
          </head>
          <body>
            <script src="https://cdn.jsdelivr.net/lodash/4/lodash.min.js"></script>
          </body>
        </html>

/**
 * Punto 1: Preguntar por el día de la semana
 */
function askForTheDayWeek(){
    var day = prompt("Ingrese el día de la semana.");
    day = _.lowerCase(_.deburr(day));
    switch(_.deburr(day)){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            window.alert("Día laboral");
            break;
        case "sabado":
        case "domingo":
            window.alert("Día festivo");
            break;
        default:
            window.alert("El día " + day + " no existe");
            break;
    }
}

/**
 * Punto 2: muestra el mensaje si el número es par o impar
 */
function esPar(num){
  window.alert(( num % 2 ) === 0 ? "Es par" : "Es impar");
}

/**
 * Punto 3: Imprime los números impares de los 10 primeros números
 */
function imprimirImpares(){
  var i = 1;
  while (true) {
    if ((i % 2) !== 0) {
      console.log(i);
    }
    i++;

    if (i >= 10) {
      break;
    }
  }
}

/**
 * Punto 4: potencia de 2 de los 10 primeros números
 */
 function potencia2(){
    for(var i = 0; i < 10; i++){
      console.log(Math.pow(i, 2));
    }
 }

 /**
  * Punto 5: Número mágico
  */
  function jugarNumeroMagico(){
    var magicNumber = Math.floor((Math.random() * 10) + 1);
    var i = 0;
    var num = 0;

    while(true){
      i++;
      num = prompt("ADIVINA: Ingresa el número");
      if (num === magicNumber) {
        alert("Adivinaste!!! El número es " + num + ".\nTe tomó " + i + " intentos");
        break;
      }
    }
  }






  /*
     Punto 6

      HTML:

      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>JS Bin</title>
      </head>
      <body>
        <div id="content1"></div>
        <div id="content2"></div>
        <div id="content3"></div>
      </body>
      </html>


   */

function modificarDOM(){
  var content1 = document.getElementById("content1");
  var content2 = document.getElementById("content2");
  var content3 = document.getElementById("content3");

  content1.style.backgroundColor = "#00F";
  content2.style.backgroundColor = "#0F0";
  content3.style.backgroundColor = "#F00";

  createParagraph(content1);
  createParagraph(content2);
  createParagraph(content3);

  function createParagraph(element){
    var p = document.createElement('p');
    element.appendChild(p);
  }

  var arrayParagraph = document.querySelectorAll("p");
  for(var i = 0; i < arrayParagraph.length; i++){
    arrayParagraph[i].innerHTML = "soy el nodo p";
  }
}


//------------------------------------ES6-------------------------------------//
/*
   Punto 1
*/
function sumarValores(){
  let array = [1,2,3,4,5,6,7,8,9];
  console.clear();
  console.log(array.reduce((count, sum) => sum + count, 0));
}

/*
   Punto 2
*/
function sumarValoresForEach(){
  let array = [1,2,3,4,5,6,7,8,9];
  let sum = 0;

  array.forEach(element=>{ sum += element });
  console.log(sum);
}

function eliminarPares(){
  let array = [1,2,3,4,5,6,7,8,9];
  console.log("Antes del filtro " + array);
  console.log("Después del filtro " + array.filter(el => (el % 2) !== 0));
}
