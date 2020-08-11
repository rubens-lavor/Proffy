const { pageGiveClasses, pageLanding, pageStudy } = require ('./pages');

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
server
    //configurar arquivos estáticos(css, scrits, imgaens)
    .use(express.static("public"))/**busca da pasta public */
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(8080)

