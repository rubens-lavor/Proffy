const express = require('express')
const server = express()

server.use(express.static("public"))
.get("/", (requisicao, resposta) => {
    return resposta.sendFile(__dirname + "/views/index.html");
})
.get("/study", (requisicao, resposta) => {
    return resposta.send("study");
})
.listen(8080)

