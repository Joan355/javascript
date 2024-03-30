function hola(nombre, callback){
    setTimeout(() => {
        console.log("hola ," + nombre)
        callback()
    }, 1500);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
       console.log("Adios", nombre)
       otroCallback() 
    }, timeout);
}

console.log("Iniciando proceso...")

hola("Joan", (nombre) => {
    
    adios(nombre, () => {
        console.log("Terminando proceso...")
    })
}) 






//Las funciones son elementos de primer nivel
