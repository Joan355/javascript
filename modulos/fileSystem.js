import { readFile, readFileSync, unlink, writeFile } from "fs";
import { dirname } from "path";


function leer(path){ //Leer un archivo de forma sincrona pero usando asincronidad
    return new Promise((resolve, reject) => {
        try{
            const contenido = readFileSync(path)
            resolve(contenido.toString())
        }catch(error){
            reject(error)
        }
    })
}

//Leer un archivo de forma asincrona
function leer2(path){
    readFile(path, (err, data) => {
        if(err){
            console.log("No se pudo leer el archivo")
        }else{
            console.log(data.toString())
        }
    })
}

function escribir(ruta, contenido){
    writeFile(ruta, contenido, (err) => {
        if(err){
            console.error("No he podido escribirlo", err)
        }else{
            console.log("Se ha escrito correctamente")
        }
    });
}

function borrar(path, callback){
    unlink(path,callback)
}

leer("modulos/archivo").then(contenido => {
    console.log(contenido)
})

escribir("modulos/archivo", "Soy un archivo nuevo")

borrar("modulos/archivo", (err) => {
    if(err){
        console.log("Problema al eliminarse")
    }else{
        console.log("Se ha eliminado correctamente")
    }
})