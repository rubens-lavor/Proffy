module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {

    //inserir dados na tabela proffs
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    
    const proffs_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffs_id}"
        );  
    
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedules
    const insertedAllClassScheduleValues = classScheduleValues.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${value.weekday}",
                "${value.time_from}",
                "${value.time_to}"
            );
        `)
    })

    //aqui executar todos os db.run() da class_schedule
    await Promise.all(insertedAllClassScheduleValues)
}