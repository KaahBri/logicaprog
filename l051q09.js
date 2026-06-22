let cont = 100;
let acum = 0;

while(cont<=500){

if(cont%2==0){
    
 acum = acum + cont;

 console.log(`${cont}+${acum}`);
}

cont+=2;





}


console.log(`A soma dos pares é: ${acum}`);
