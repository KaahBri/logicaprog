// Revisão para prova - material 09 - aula 16

class Carro {   // classe (nao entendi)
    marca : string;
    modelo : string;
    ano : number;


constructor(marca : string , modelo : string , ano : number){ // construdor (nao sei oq faz)
this.marca = marca;
this.modelo = modelo;
this.ano = ano;



}// fim do construtor


exibirDetalhes() : void{

 console.log(`A marca do carro:${this.marca}`);
 console.log(`O modelo do carro é:${this.modelo}`);
 console.log(`O ano do carro é: ${this.ano}`);



}

   




}// fim da classe

let carro = new Carro(" Ford", " Ka", 2016) ;

carro.exibirDetalhes();


