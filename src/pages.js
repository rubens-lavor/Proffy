const DataBase = require('./database/db');

const { subjects, weekday, getSubject } = require('./utils/format');

function pageLanding(req, resposta) {
    return resposta.render("index.html");
}

function pageStudy(req, resposta) {
    const filters = req.query;
    //console.log(filters); ---> { subject: '2', weekday: '0', time: '09:00' }
    // as propredades que filters pode acessar

    if(!filters.subject || !filters.weekday || !filters.time){
        
        return resposta.render("study.html", { filters, subjects, weekdays });
        
    }

    //converter horas em minutos

    const query = `
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `

}


function pageGiveClasses(req, resposta) {
    const data = req.query;
    //adicionar dados a lista de proffys (se houver dados)

    const isNotEmpty = Object.keys(data).length > 0
    // transforma um objeto num array e está verificando seu tamanho
    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);
        return resposta.redirect("/study");
    }

    return resposta.render("give-classes.html", { subjects, weekdays });
}

module.exports = { pageLanding, pageStudy, pageGiveClasses }