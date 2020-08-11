//dados


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

const weekday = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

module.exports = {
    subjects,
    weekday,
    getSubject
}