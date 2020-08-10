const express = require('express')
const server = express()

server.use(express.static("public"))
.get("/", (requisicao, resposta) => {
    return resposta.sendFile(__dirname + "/views/index.html");
})
.get("/study", (requisicao, resposta) => {
    return resposta.sendFile(__dirname + "/views/study.html");
})
.get("/give-classes", (requisicao, resposta) => {
    return resposta.sendFile(__dirname + "/views/give-classes.html");
})
.listen(8080)

