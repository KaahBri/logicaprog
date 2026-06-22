// 10) Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação = 
// valor + (valor x (taxa : 100) x tempo em dias).




   let prest, valor, taxa, inteiro;


  escreval("Informe O valor da pestação: ")
  leia(valor)
  escreval("R$ ", valor)
  escreval("Informe o tempo que sua prestação está vencida: ")
  leia(temp)
  escreval(temp, " dias")
  escreval("Informe a taxa de juros diária: ")
  leia(taxa)
  escreval(taxa," %")

  prest <- valor + (valor*(taxa/100)*temp)

  escreval("Sua prestação original ")
  escreval("R$", valor)
  escreval("Dias que sua prestação está vencida ")
  escreval(temp, " dias")
  escreval("Valor da prestacção com aumentos ")
  escreval("R$ ",prest)
