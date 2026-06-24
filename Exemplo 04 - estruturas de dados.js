// Declarando um objeto chamdo aluno 
// 

// Aluno é um objeto aqui nesse exemplo


let aluno ={
  nome: "João", //nome: é a chave
  idade: 18 ,
  ativo: true 
}


console.log(aluno); // Aparece os dados todos, haha
console.log();

console.log(`Nome do aluno: ${aluno.nome}`); // se utilizar o obejeto(aluno) com um . eu consigo puxar um por um.
console.log(`Idade: ${aluno.idade}`);


if (aluno.ativo){
console.log(`Situação: Ativo`);

}else{
  console.log(`Situação: Inativo`);
  
}
console.log();

// exemplo notação de conchetes

let propriedade = "nome"; // conteudo é uma chave de um objeto

console.log(aluno[propriedade]); // puxa a parada lá

// tambem funciona diretamente 

console.log(aluno["idade"]);

// Declarando novo objeto 

let produto = {
  nome: "Notebook",
  preco: 3000
}

console.log();
console.log(produto);

// modificando o preço do notbook
console.log();
produto.preco = 2800;
console.log(produto);

// adicionar uma nova propriedade (chave)

produto.estoque = 15
console.log();
console.log(produto);


