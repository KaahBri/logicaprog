// Atividade VETOR (ARRAYS) - Aula 14 -

//2)Desenvolver um programa que pergunte cinco elementos de um vetor a. 
// No final, apresente a soma de todos os elementos deste vetor.

let a = [5,7,8,9,1]
let acum = 0 // não esqueça de atribuir um valor para o acum (hehe)
for(let cont = 0; cont < 5; cont++){

    acum = acum + a[cont]

}

console.log(`Sua soma: ${acum}`);