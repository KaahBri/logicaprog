// Vetores (Arrays)

let alunos = ["Ana " , "Bruno " , "Carlos " , "Diana "];


// notas

let notas = [3.5 , 7.8 , 8.9 , 10]

console.log();
console.log(`Todos os pobres: ${alunos}`); // exibe todos os alunos bobos, hehe
console.log();
console.log(alunos[3]) // chama a princesa do sapo (Diana)
console.log();
console.log(alunos[0]); // exibe ANa viva mariana
console.log(); 
alunos[2] = "Antônio";
console.log();

console.log(alunos); // exibe novamente geral mas com alteração

console.log();

for (let cont = 0; cont < 4; cont++){

    console.log(`Aluno(a) ${cont + 1} : ${alunos[cont]}`); // cuidado com os sinais


}

console.log();

for (let cont = 0; cont < 4; cont++){

    console.log(`Nome : ${alunos[cont]} - Notas ${notas[cont]}`);


}


// Experimento - Deu certo

console.log();
console.log(`--- Os novos alunos são ---`);
console.log();

for (let cont = 0; cont < 4; cont++){

    alunos = [" Julia", " El pepe"," Caldo verde"," Ludmila"];

    
    console.log(`Nome: ${alunos[cont]}`);


}

console.log(``);


console.log(alunos.length);  // Verifica o tamanho da peça ou seja o Tamanho do Arrays.



// exemplo de for of

console.log(``);

for(let aluno of alunos){

    console.log(`Nome: ${aluno}`)
}


console.log(``);

// exemplo de for each


alunos.forEach(function(aluno,indice) // 
{
console.log(`índice : ${indice}, aluno: ${aluno}`);
});

// Metodos push,unshift , pop e shift
// push - adiciona ao final do vetor 

console.log();

alunos.push("Raimundo");

console.log(alunos);

// pop - remove do final do vetor

alunos.pop();
console.log(alunos);

// unshift - adiciona alguém no inicio do vetor

alunos.unshift("Raimundo");
console.log(alunos);

// shift - remove do inicio

alunos.shift();
console.log(alunos);