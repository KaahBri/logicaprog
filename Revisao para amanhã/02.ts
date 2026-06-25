class ContaBancaria{

  titular: string;
  saldo: number;
  historico: string[];

  constructor(titular : string, saldo : number){
    this.titular = titular;
    this.saldo = saldo;
     this.historico = [];
  }

  depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor; // Soma o valor ao saldo atual
            this.historico.push(`Depositou: R$ ${valor}`); // Guarda no histórico
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }



  // 4. Método para Sacar dinheiro (com lógica condicional)
    sacar(valor: number): void {
        // Verifica se o valor que quer sacar é menor ou igual ao saldo que possui
        if (valor <= this.saldo) {
            this.saldo -= valor; // Subtrai o valor do saldo atual
            this.historico.push(`Sacou: R$ ${valor}`); // Guarda no histórico
            console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        } else {
            // Se tentar sacar mais do que tem, cai aqui
            console.log(`Margem insuficiente! Não foi possível sacar R$ ${valor}.`);
        }

        }

 exibirSaldo(): void {
        console.log(`----------------------------------------`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
        console.log(`----------------------------------------`);
    }

    // Método extra para exibir o histórico na tela
    exibirHistorico(): void {
        console.log(`=== HISTÓRICO DA CONTA DE ${this.titular.toUpperCase()} ===`);
        if (this.historico.length === 0) {
            console.log("Nenhuma movimentação realizada.");
        } else {
            this.historico.forEach(operacao => console.log(`- ${operacao}`));
        }
        console.log(`========================================\n`);
    }
}

let contaPedro = new ContaBancaria("Pedro Henrique Silva", 100);
contaPedro.exibirSaldo();

contaPedro.depositar(50);   // Saldo vai para 150
contaPedro.sacar(30);       // Saldo vai para 120
contaPedro.sacar(200);      // Vai dar erro de saldo insuficiente!
contaPedro.exibirSaldo();   // Mostra o saldo final (120)
contaPedro.exibirHistorico(); // Mostra tudo o que deu certo no histórico

console.log();

// Criando a Conta 2 (Maria) com R$ 0 iniciais
let contaMaria = new ContaBancaria("Maria Souza", 0);
contaMaria.depositar(1000); // Saldo vai para 1000
contaMaria.sacar(450);      // Saldo vai para 550
contaMaria.exibirSaldo();
contaMaria.exibirHistorico();