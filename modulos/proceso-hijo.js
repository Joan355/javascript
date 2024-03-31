import { exec, spawn } from "child_process"


exec("ls -la", (err, stdout, sterr) => {
    if(err){
        console.error(err)
        return false
    }
    console.log(stdout)
})


let proceso = spawn("ls", ["-la"])
console.log(proceso.pid)
console.log(proceso.connected)