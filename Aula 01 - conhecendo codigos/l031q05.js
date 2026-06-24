// Questão 5 - Material LP 03.1 - Lista 1 de Exercicios de Programacao com Sequencia

// Fazer um programa que pergunte o salário de um funcionário 
// e apresente este salário com um aumento de 15%.



let sal,aum, acre;






sal = 4500.00;

console.log(`-------------------------------------`);
console.log(``);
console.log(`Informe seu sálario: ${sal}`);
console.log(``);


aum = sal * 15/100; // Para + sal*1.15 (Calculo Direto)
acre = sal + aum;


// toFixed() é para forçar números depois da virgulaa

console.log(`Seu salário com aumento: ${acre.toFixed(2)}`);
console.log(``);

console.log(`----------------------------------------`);