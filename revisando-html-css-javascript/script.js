const alunos = [
    {
        nome: "Pablo",
        idade: 25,
    },
    {
        nome: "José",
        idade: 19,
    },
    {
        nome: "Roberto",
        idade: 16,
    },
];

console.table(alunos);

console.log("____________________filter______________________");

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);

console.table(alunosFiltrados);

console.log("____________________find______________________");

const alunoRoberto = alunos.find((aluno) => aluno.nome === "Roberto");

console.log(alunoRoberto);

console.log("____________________findIndex______________________");

const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome === "Roberto");

console.log(alunoRobertoIndex);

console.log("____________________reduce______________________");

const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade;  
},0);

console.log(idades);

console.log("____________________some______________________");

const existeAlunoMenor = alunos.some((aluno) => aluno.idade < 10);

console.log(existeAlunoMenor);

console.log("____________________every______________________");

const todosAlunosMaiores = alunos.every((aluno) => aluno.idade >= 10);

console.log(todosAlunosMaiores);

