let num : number;


function somar(a: number,b : number) : number{
 
 
    let resultado = a + b;
    return resultado; // é uma variavel neymar, local e meio podre
    

};




console.log(somar(6,1));
console.log();

// guardando o valor renornado em uma variavel

num = somar(10,20); // se tornou uma variavel vini junior (global)

console.log();
console.log(num);


somar(4,5);

function direcionador (){

console.log(`Siga em frente! Estude sempre!`)

  


}

let texto = direcionador();
// chamando a função direcionador



function mensagem(){
 return "Para mim você é tipo mesa de encantamento, porque deixa tudo em mim melhor"

}
mensagem(); // perdi o restorno da fução
console.log(mensagem());

// fun


function tudao(){
    console.log(`Inicio da função TUDAO`);
    direcionador(); // chamando a funcao direcionador 
    let calc = somar(3,7);
    console.log(`Resultado da soma ${calc}`);
    let msg = mensagem();
    direcionador(); // funcao sem retorno é void
    console.log();
    console.log(`Mensagem do dia: ${msg}`);
    console.log();

    console.log(`Fim da função TUDAO`);
}


tudao();