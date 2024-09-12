
// Invocación
let arrCondiciones = [true,true,true,true,true];
prepararPino(arrCondiciones);


function prepararPino(arrCondiciones) {
    let log = [];                                                       //arreglo donde se almacena el resultado

    cocinarCebollas(arrCondiciones[0])                                  //inicia con el primer paso
        .then(result => {                                               //si la promisa se resuelve, push al arreglo 
            log.push(result)
            log.push({cebollas: 'reservadas', status: 'con agua'});     
            return (sofreirIngredientes(arrCondiciones[1]))             //incia segundo paso, no continua al siguente bloque hasta que termine la funcion
        })
        .then(result => {                                               //el returno manda el resultado al siguiente .then
            log.push(result)                                            //si es rechazado, pasa todo .then hasta el bloque de .catch
            return terminarSofrito(arrCondiciones[2]);
        })
        .then(result => {
            log.push(result);
            return seguirCocinando(arrCondiciones[3]);
        })
        .then(result => {
            log.push(result);
            return dejarReposar(arrCondiciones[4]);
        })
        .then(result => {
            log.push(result);
            console.log(log);
        })
        .catch(error => {
            console.error(error);
        });
}
     


function cocinarCebollas(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.cebollas = true;
                objReturn.status = "blandas";
                resolve( objReturn);
                }
            else reject("Paso01: Fallo en cocinar cebollas");
        }, 1353);
    }
)}



function sofreirIngredientes(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.sofrito = true;
                objReturn.status = "a fuego medio";
                resolve(objReturn);
            }
            else reject("Paso02: Fallo en el sofrito");
        }, 1803);
    })
}
    
    
    
function terminarSofrito(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.sofrito = true;
                objReturn.status = "terminado con carne y aji de color";
                resolve( objReturn);
            }
            else reject("Paso03: Fallo en el sofrito");
        }, 2007);
    })
}



function seguirCocinando(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.pino = true;
                objReturn.status = "retirado del fuego luego de 20 minutos";
                resolve( objReturn);
            }
            else reject("Paso04: Fallo en el pino");
        }, 1857);
    })
}




function dejarReposar(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.pino = true;
                objReturn.status = "Termino de su reposo de 24 horas";
                resolve( objReturn);
            }
            else reject("Paso05: Fallo en el reposo");
        }, 1107);
    })
}



