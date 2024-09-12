//Recordemos a la buena de "suerte"

function suerte(){
  let tirada = Math.random();
  if (tirada < 0.8)
    return 0;
else
  return 1;
}

// Usémosla para este emocionante juego
function lanzarMoneda(opcion){

    return new Promise((resolve, reject) => {

        setTimeout(() => {let lanzamiento = { resultado: 0};
                          lanzamiento.resultado = suerte();
                          if(lanzamiento.resultado === opcion){
                             console.log("buena suerte")
                             resolve("Acierto")
                          }
                          else { 
                              reject( "Fallo" );
                          }
                         },1703);
    });
}
/*
// Usemos la funcion que retorna promesa..

lanzarMoneda(1)
  .then( (msg) => { console.log("Bloque ordenado, espera su turno");
                    console.log("Valor desde promesa: " + msg) })
  .catch( e => console.log(e));
  ;

console.log("asincrono");

// un ejemplo "mas complejo"
lanzarMoneda(1)
  .then( (msg) => { console.log(msg);
                  lanzarMoneda(1)
                    .then( (msg) => { console.log(msg);
                                      lanzarMoneda(1)
                                        .then( (msg) => { 
                                          console.log("TRIPLETA"); })})
                  })
  .catch( e => console.log(e));
*/
// y ahora ASYNC - AWAIT
// Ejemplo Async
async function puroAzar(){
  console.log("Primer lanzamiento");
  await lanzarMoneda(1);
  console.log("Segundo lanzamiento");
  await lanzarMoneda(1);
  console.log("Tercer lanzamiento");
  await lanzarMoneda(1);
  console.log("Cuarto lanzamiento");
  await lanzarMoneda(1);
  console.log("Quinto lanzamiento");
  await lanzarMoneda(1);
  console.log("Esto es pura suerte");
}

puroAzar();  

// ¿Qué pasa si al ejemplo anterior le sacamos uno o mas "await?"

//Notese que async retorna una promesa
//Como está todo ordenado, puedo esperar por los valores "resolve" y hacer algo con ellos, sin temor de que la asincronía arruine algo.