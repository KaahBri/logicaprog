// Questão 4: Escopo de variáveis - Observe o código abaixo e reescreva-o corretamente, garanIndo que a
// variável resultado tenha escopo local e seja retornada pela função, em vez de tentar acessá-la globalmente:
// // Código com erro de escopo
// function multiplicar(a, b) {
// let resultado = a * b;
// }
// console.log(resultado); // Isso causará um erro!



function multiplicar(a,b){

    let resultado = a * b;
    return resultado;
}

console.log(multiplicar(6,9));

