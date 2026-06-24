class Pessoa{
   
nome;
idade;

// metodo construtor
constructor(nome, idade){
    this.nome = nome 
    this.idade = idade
}

//metodo comum


apresentar(){
    console.log(`Ola! meu nome é ${this.nome}`);
}

}// Fim da classe pessoa

let pessoa1 = new Pessoa ("Roberto",33); // instanciando um objeto com o construtor

console.log(pessoa1)

pessoa1.apresentar();