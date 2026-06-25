// Questão 5: Refatoração de código - Um desenvolvedor escreveu o seguinte código repeIIvo para calcular
// a área de dois retângulos diferentes:



// // Retângulo 1
// let base1 = 5;
// let altura1 = 10;
// console.log(base1 * altura1);
// // Retângulo 2
// let base2 = 8;
// let altura2 = 3;
// console.log(base2 * altura2);
// Refatore esse código criando uma função chamada calcularAreaRetangulo que receba base e altura como
// parâmetros e retorne o resultado. SubsItua as chamadas repeIdas pela uIlização da sua nova função.


function calcularAreaRetangulo(base : number, altura: number) : number {

    let retangulo = base * altura;
    return retangulo;

}

let receba = calcularAreaRetangulo(5,10);
let receba2 =  calcularAreaRetangulo(8,3);
console.log();
console.log(`O calculo do seu primeiro retangulo: ${receba}`);
console.log(`O calculo do seu primeiro retangulo: ${receba2}`);







