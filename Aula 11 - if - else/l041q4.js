//Questão 4
// Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
// divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
// 4 e 5”.


let n1, div4,div5;



n1 = 10;
div4 = n1%4 == 0;
div5 = n1%5 == 0;

console.log(`Informe um número inteiro: ${n1} `);
if(div4 && div5){
 console.log(`Esse número é divisivel por 4 e 5.`);
}else{
    console.log(`Esse número não é divisivel por 4 e 5`);
}

