//dados

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9-8323-3433",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9-8323-3433",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220],
    }
]

const subjects = [
    "Biologia",
    "Ciências",
    "Artes",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//funcionalidaes

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

function pageLanding(req, resposta) {
    return resposta.render("index.html");
}

function pageStudy(req, resposta) {
    const filters = req.query;
    //console.log(filters); ---> { subject: '2', weekday: '0', time: '09:00' }
    // as propredades que filters pode acessar
    return resposta.render("study.html", { proffys, filters, subjects, weekdays });
}


function pageGiveClasses(req, resposta) {
    const data = req.query;
    //adicionar dados a lista de proffys (se houver dados)

    const isNotEmpty = Object.keys(data).length > 0
    // transforma um objeto num array e está verificando seu tamanho
    if(isNotEmpty){

        data.subject = getSubject(data.subject);

        proffys.push(data);
        return resposta.redirect("/study");
    }

    return resposta.render("give-classes.html", { subjects, weekdays });
}


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

