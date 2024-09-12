//Una promesa es un objeto <<<---

/* Una promesa paso a paso:

(1) Creo el objeto. El objeto tiene una funcion callback con resolve y reject Ojo, se llaman asi por convencion pero pueden llamarse como quieran.
RECOMIENDO que los llamen resolve y reject o si no nadie entenderá
(2) Ejecuto la promesa
(3.1) La promesa va a devolver lo que esté en éxito (resolve)
(3.2) Ahora, podemos preguntar si la promesa se ha cumplido con exito y hacer algo con esa información, la cual la "almacena" .then
para eso se hace: 
ObjPromesa.then( funcion ) es decir:
ObjPromesa.then( (valorRetornado) => { acciones que pueden involucrar el valorRetornado} )
*/

//Ejemplo01

let objPromesa = new Promise( function(resolve, reject) {
    let a = 177;
    let resultado = true //Valor boolean true or false.
    if(resultado){ //Sabré que le pasó a mi promesa
        resolve( a + " exito")
      }
    else { reject( " Esto ha fallado...")}
})

// con los valores retornados (en then) puedo seguir trabajando entendiendo que la promesa esta "cumplida" y no hay lios con asincronía!

console.log(objPromesa); //Inspeccionemos...es un objeto!

objPromesa
  .then((retornoDePromesa)=>{console.log("esto ha resultado bien"); 
                         console.log(`Valor retornado: ${retornoDePromesa}`)})
  .catch((valorSiFalla) => {console.log("retorno: " + valorSiFalla)})

