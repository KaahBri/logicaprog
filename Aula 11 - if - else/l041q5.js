// //Questão 5
// Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
// aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
// mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
// da média obtida pelo aluno.



let n1,n2,n3,n4,med,nome;


n1 = 4;
n2 = 6; 
n3 = 4 ;
n4 = 4;
console.log(`Informe a primeira nota: ${n1}`);
console.log(`Informe a segunda  nota: ${n2}`);
console.log(`Informe a terceira nota: ${n3}`);
console.log(`Informe a quarta nota: ${n4}`);

med = (n1+n2+n3+n4)/4;
nome = "Inde naverrete"; 
if(med>=5){
 console.log(`Parabens ${nome}, você foi aprovado, sua media é: ${med.toFixed(1)}`);
}else{
    console.log(`Veio só para comer animal?,Sua media é: ${med.toFixed(1)} VOCÊ ESTÁ REPROVADO!!!!`);
}
