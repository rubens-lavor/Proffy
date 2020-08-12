const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require ('./pages');

//servidor
const express = require('express');
const server = express();

//configurar nunjucks (templete engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
//server.use(express.urlencoded({extended: true})).use(express.static("public")).get("/", pageLanding)get("/study", pageStudy).get("/give-classes", pageGiveClasses).listen(8080)
server
    //receber os dados do req.body
    .use(express.urlencoded({extended: true}))
    //configurar arquivos estáticos(css, scrits, imgaens)
    .use(express.static("public"))/**busca da pasta public */
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(8080)

