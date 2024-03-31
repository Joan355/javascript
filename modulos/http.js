import http from "http"

http.createServer((req, res) => {
    console.log("Nueva peticion")
    console.log(req.url)
    res.write("Hola, ya se usar http de nodejs")
    res.end()
}).listen(3000)
console.log("Escuchando peticion http en el puerto 3000")

