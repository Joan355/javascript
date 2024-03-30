function hola(nombre, callback){
    setTimeout(() => {
        console.log("hola ," + nombre)
        callback()
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log("Bla bla bla...")
        callbackHablar()
    }, 1000);

}


function adios(nombre, otroCallback){
    setTimeout(() => {
       console.log("Adios", nombre)
       otroCallback() 
    }, 1000);
}

console.log("Iniciando proceso...")

hola("Joan", (nombre) => {
    hablar(() => {
        adios(nombre, () => {
            console.log("Terminando proceso...")
        })
    });
}) 






//Las funciones son elementos de primer nivel
