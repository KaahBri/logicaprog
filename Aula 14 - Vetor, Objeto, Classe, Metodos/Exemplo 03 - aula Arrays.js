let numeros = [10,25,37,42,58];
let soma = 0;
// Usando for clássico

for (let cont = 0;  cont < numeros.length; cont++){
    console.log(`Indice ${cont}, : ${numeros[cont]}`)
}

console.log();

for(let num of numeros){
    console.log(num);
}

console.log();

numeros.forEach((num,cont) => {
console.log(`Posição ${cont} : ${num}`)
});

for(let num of numeros){
    soma+=num;
}

console.log();


// Atividade 02

console.log(`Soma total: ${soma} `);

console.log();

let media = soma / numeros.length;

console.log(`Media: ${media}`);

// atividade 03

let numeroos = [42 , 7 , 19 , 3 , 55 , 28];

console.log();
console.log(`Origina: ${numeroos}`);

let crescente = [numeroos].sort((a,b)=> a + b);

console.log(`Ordem crescente: ${crescente}`);

