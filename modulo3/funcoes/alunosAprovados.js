function verificaNota(alunos, media, limiteDeFaltas=MAX_AULAS){
    let aprovados = [];
    for (aluno of alunos){
        if (aluno["nota"] >= media && aluno["faltas"]< limiteDeFaltas){
            aprovados.push(String(aluno["nome"]).toUpperCase());
        }
    }
    return aprovados;
}

listaAlunos = [
    {
        "nome": "maria",
        "idade":17,
        "nota":4,
        "faltas":2
    },
    {
        "nome": "marcos",
        "idade":16,
        "nota":8,
        "faltas":10
    },
    {
        "nome": "luana",
        "idade":17,
        "nota":10,
        "faltas":4
    },
    {
        "nome": "lucas",
        "idade":17,
        "nota":3,
        "faltas":12
    },
    {
        "nome": "fernanda",
        "idade":16,
        "nota":7,
        "faltas":3
    },
    {
        "nome": "bruno",
        "idade":17,
        "nota":5,
        "faltas":0
    },
];

const LIMITE_DE_FALTAS = 10;
const MEDIA = 5;
var MAX_AULAS = 60;

console.log("Alunos(as) aprovados ignorando as faltas: ",verificaNota(listaAlunos,MEDIA,));

// considerando faltas
console.log("Alunos(as) aprovados considerando as faltas: ",verificaNota(listaAlunos,MEDIA,LIMITE_DE_FALTAS));

