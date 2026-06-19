// Questão 1

// let i = 1 ;
// // ele é maluco, lê de cima para baixo (receba inteligencia) 
// while(i<=100){
   
//  console.log(i);
//     i= i+1;
// }


// Questão 2

// let i = 100;
// while(i>=1){
 
//    console.log(i);
//     i = i-1;
// }

//Questão 3

// let i = 15;
// let pon;
// while(i<=200){
     
//     pon = i**2;
//     console.log(pon); // serve do mesmo modo que (i * i);
//     i = i + 1;
// }

// Questão 4

// let soma = 0;
// let i = 1;
//  //Vale sempre 0 para contas de soma e subtração

// while(i<=100){
    
//     soma = soma + i;
//     i = i + 1;


// }

// console.log(`Sua conta é: ${soma}`);

// Questão 5

// let n1 = 989;
// let cont = 1;
// let res;


// while(cont<=10){
    
//     res = cont * n1 
   
//     console.log(`${n1} x ${cont} = ${res}`)  
//     cont = cont + 1;
    
// }

//Questão 6 (FAZER EM CASA)
/*Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente o valor obtido da
multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...).
*/

let n = 80; 
let nAnt;

while (n > 50) {
    
    console.log(`Erro: O número ${n} é inválido. Digite um número menor ou igual a 50.`);
    console.log(``);
    
    n = 2;
    
    console.log(`Seu novo número é: ${n}`);
   console.log(``);
}


console.log(`      ~~~~ Resultados das multiplicações ~~~~     `);
console.log(``);
console.log(`           Valor inicial aceito: ${n}\n           `);


while (n < 250) {
    nAnt = n;
    n = n * 3;
    
    if (n < 250) {
        console.log(`${nAnt} x 3 = ${n}`);
    }
}

console.log(`\n-------------------------------------`);


//Questão 7 (FAZER EM CASA)



