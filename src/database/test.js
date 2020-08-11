const DataBase = require('./db');
const createProffy = require('./createProffy');

DataBase.then(async(db) => {
    //Inserir dados
    proffyValue = {
        name: 'Rubens Lavor',
        avatar: 'https://avatars2.githubusercontent.com/u/67754772?s=460&v=4',
        whatsapp: '9 8475 0000',
        bio: 'Professor de Física'

    }

    classValue = {
        subject: 5,
        cost: '20'
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db,{proffyValue, classValue, classScheduleValues})


    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    //consutar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys);

    //o horáio que a pessoa trabalha, por exemplo, é das 8:00 -18:00
    //o horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "820"
    `) 

    console.log(selectClassesSchedules);
})