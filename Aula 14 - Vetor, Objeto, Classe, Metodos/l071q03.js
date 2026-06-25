//3) Desenvolver um programa que pergunte cinco elementos de um vetor a. 
// No final, apresente a soma de todos os elementos que sejam ímpares.

let a = [6,7,15,9,2];
let acum = 0;
for(let cont = 0; cont < 5; cont++){
   let div = a[cont]%2
    if(div==1){
        acum = acum + a[cont]
    }
}
console.log(`Sua soma de números ímpares: ${acum}`);