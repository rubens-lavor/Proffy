require('express')()
.get("/", (requisicao, resposta) => {
    return resposta.send("Hi from server");
})
.get("/study", (requisicao, resposta) => {
    return resposta.send("Página study");
})
.listen(8080)

function express(){
    return{
        name: "Rubens",
    }
}

express();