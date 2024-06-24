let resposta 

console.log('Toca algum instrumento?');

process.stdin.once("data", function (data) {
    let entrada_usuario = data.toString().trim().toLowerCase()

    if(!resposta) {
        resposta = entrada_usuario

        if(resposta == "s" || resposta == "sim") {
            console.log("Toca um instrumento")
    process.exit()
        } else if (resposta == "n" || resposta == "não" || resposta == "nao") {
            console.log("Nada de bom")
    process.exit()
        } else {
            console.log("Não entendi")
    process.exit()
        }
    }
})
