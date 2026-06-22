// Questão 1
// Desenvolver um programa que apresente todos os valores numéricos 
// inteiros ímpares situados na faixa de 1000 a 1500.





// for(let cont = 1000; cont <=1500; cont++){

//     if(cont%2==1){
          
//         console.log(`Seus numeros impares são: ${cont}`);

//     }
    
    
// }


// Questão 2

//2) Desenvolver um programa que apresente o total da soma de n números inteiros do número 
// 1 até n, onde n é um valor informado pelo usuário.

// let n = 100; 
// // console.log(`Digite um numero: ${n}` );
// let acum = 0;
// for(let cont = 1 ; cont <= n; cont++ ){

//  acum = acum + cont;

// }

// console.log(`Sua soma é: ${acum}`);


// Questão 3
//Desenvolver um programa que apresente os resultados de uma tabuada de um número 
// qualquer informado pelo usuário.

// let n = 7;
// let res; 

// for(let cont = 1; cont <= 10; cont++){

//     res = n * cont;
//     console.log(`${n} x  ${cont} = ${res}`);
// }


// //Questão 4
// // Desenvolver um programa que apresente todos os números divisíveis por 5 que sejam menores que 50.




// for(let cont = 0; cont < 50; cont++){
    
//    if(cont%5==0){
      
//     console.log(`Seus némeros divisíveis por 5 são: ${cont}`);
   
//    }


    

//  }


// Questão 5

//Desenvolver um programa que apresente as potências de 2, variando de 0 a 10.


// for(cont = 2; cont < 10; cont++){    

//  let pote = 0;
//   pote = cont **2;
//   console.log(`Suas potencias são:  ${pote} `);

// }

// Questão 6

//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente 
// qualquer, ou seja, de b, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().




// let e = 9;
// let b = 5;
// let pote = 1;

// console.log(`Informe a base da base: ${b}`);
// console.log(`Informe o valor do expoente: ${e}`);

// for(cont = 1; cont <= e; cont++){
    

    

//    pote = pote * b; 
   
   
   
  
   
//    // muito burra papo reto (essa parada serviu como acumulador e seu erro foi no pote -> ele deveria valer 1, colocando 0 acabou com a minha vida, melhore)
// }
//       console.log(`Suas potencias são:  ${pote}`);



// Questão 7
// Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21.




let acum = 0;

for (let cont = 3; cont<=21; cont++){

if (cont%2==0){

 acum = acum + cont

 console.log(`${cont} `);



}


}


console.log(`A soma desses valores é: ${acum}`)