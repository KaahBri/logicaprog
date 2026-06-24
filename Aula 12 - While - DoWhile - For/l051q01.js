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

// let n = 80; 
// let nAnt;

// while (n > 50) {
    
//     console.log(`Erro: O número ${n} é inválido. Digite um número menor ou igual a 50.`);
//     console.log(``);
    
//     n = 2;
    
//     console.log(`Seu novo número é: ${n}`);
//    console.log(``);
// }


// console.log(`      ~~~~ Resultados das multiplicações ~~~~     `);
// console.log(``);
// console.log(`           Valor inicial aceito: ${n}\n           `);


// while (n < 250) {
//     nAnt = n;
//     n = n * 3;
    
//     if (n < 250) {
//         console.log(`${nAnt} x 3 = ${n}`);
//     }
// }

// console.log(`\n-------------------------------------`);


//Questão 7 (FAZER EM CASA)

// Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 200. Para 
// saber se o número é divisível por 4 será necessário verificar a lógica desta condição com o comando if. Sendo 
// divisível, mostre-o; não sendo, passe para o próximo passo. A variável que controla o contador deve ser iniciada 
// com valor 1.



let n = 1 ; // Número 
while (n<=200){
 

if( n%4 === 0){

 console.log(` ${n} é divisível por 4`);

} else{

// console.log(`  ${n} não é Divisível por 4, Tente novamente...`);

}

n += 1;




  

}






// 8) Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares situados na faixa de 0 a 
// 20. Para saber se o número é ímpar, será necessário verificar essa condição com o comando if. Sendo ímpar, 
// mostre-o; não sendo, passe para o próximo passo.


// let n = 0;



// While(n<=20){

// if(n%2==0){

//  console.log(${n} não é ímpar);

// } else{
  
// console.log(` ${n} é ímpar c`);

// }


// n+= 1;



// }







// 9) Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize 
// um laço que efetue a variação de 2 em 2.


// let n = 0;
// let acum = 0;


// while (n<=500){

//   if(n%2==0){
  
//   acum = acum + n
  
// }

// n+=2;

// }

// console.log(A soma dos pares é: ${acum});





// 8) Desenvolver um programa que apresente as potências de 3 variando de 0 a 15. Deve ser considerado que 
// qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. A apresentação deve observar a seguinte 
// exibição na tela:
// 3 elevado à 0 = 1
// 3 elevado à 1 = 3
// 3 elevado à 2 = 9
// (...)
// 3 elevado à 15 = 14348907
// OBS: Tente fazer em uma classe utilizando Math.pow() e em outra classe sem utilizar Math.pow()

// let n =  3;