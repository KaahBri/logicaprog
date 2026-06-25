function apresentar(){
    console.log(`Bem vindo(a) ao curso javascript`)
}
console.log();

function exibirData(){
   
    console.log (new Date().toLocaleDateString());

   
    
    
}


apresentar();
console.log();
exibirData();
exibirData();
exibirData();

console.log();
function CalcularArea(base,altura){

    
    let resp = base * altura/2;
    return resp;
  

}


let area = CalcularArea(7,8);
console.log(`A área do retangulo é ${area}`);

function converterCelsius(temp) {

    let resposta = (temp * 9/5) + 32;
    return resposta;
   
}


console.log();

console.log(converterCelsius(30));

console.log();
function saudacaoPersonalizada(nome){
    nome = "Kassya"
    console.log(`Ola ${nome}, Seja bem vindo!!`);
}

saudacaoPersonalizada();





