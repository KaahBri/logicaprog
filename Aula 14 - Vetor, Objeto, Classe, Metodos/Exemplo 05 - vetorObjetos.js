// matrial 07 - aula 14 - página 16


//Declarando um vetor (ou arrays) de objetos "alunos"

let alunos = [
{nome: "Ana", idade: 18 , ativo: true},
{nome: "Carlos", idade: 19, ativo: false}, 
{nome: "maria", idade: 20, ativo: true}
];

console.log(alunos);

// acessando pelo indice e a propriedade
console.log();
console.log(`Nome do primeiro auluno(a): ${alunos[0].nome}`);
console.log();
console.log(`Todos os dados da ANA: ${alunos[0]}`); // naõ funciona, mas sozinho ele funciona. 
console.log();

// percorrendo o vetorObjeto com for normal

for(let cont = 0; cont < 3; cont++ ){
console.log(`Nome: ${alunos[cont].nome}`);
console.log(`Idade: ${alunos[cont].idade}`);

if(alunos[cont].ativo){
    console.log(`Situação: Matriculado`);
}else{
    console.log(`Situação: Não matriculado`);
}

console.log(); // \n serve para pular linha.



}


for (let aluno of alunos){
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Situção: ${aluno.ativo}`);

    console.log(); 
}


