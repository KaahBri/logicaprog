// Atividade VETOR (ARRAYS) - Aula 14 -

//1) Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. 
// Pergunte ao usuário o nome e a profissão de 5 pessoas e preencha estes vetores. 
// Ao final exiba um relatório apontando o nome e a profissão de cada uma das 5 pessoas cadastradas.

let nomes = ["Aldemir ", "Richard ", "Matilda ","Dilma ","Leon "];
let profissao = ["Ciências contábeis", "economia", "Cientista de dados", "psicologia.", "Policial Militar"];

for (let cont = 0; cont < 5; cont++){
    console.log();
    console.log(`---------------------------`);
    console.log();
    console.log(`Nome: ${nomes[cont]}`);
    console.log(`Profissão: ${profissao[cont]}`);
    console.log();
    console.log(`---------------------------`); 
    console.log();

}