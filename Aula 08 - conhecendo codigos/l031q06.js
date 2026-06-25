// Questão 6 - Material LP 03.1 - Lista 1 de Exercicios de Programacao com Sequencia

//Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, 
// e apresente esta temperatura convertida em graus Celsius. 
// A fórmula da conversão é c = (f – 32) x 5 : 9 , 
// onde c é a temperatura em graus Celsius e f em Fahrenheit.


let c,tempf;
tempf = 45;
c = (tempf-32)*5/9;


console.log(`----------------------------------------------`);
console.log(``);

console.log(`Informe os graus Fahrenheit: ${tempf}`);
console.log(``);
console.log(`Os graus celcius: ${c}`);

console.log(``);
console.log(`----------------------------------------------`);