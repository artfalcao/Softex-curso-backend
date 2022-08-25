let Banco = {
    conta: "00123-4",
    tipo: "Corrente",
    agencia: 4040,
    saldo: 1500,
    buscarSaldo: function() {return this.saldo},
    deposito: function(valor) {this.saldo += valor},
    saque: function(valor) {this.saldo -= valor},
    numeroConta: function() {return this.conta}
}

//Testes
console.log(Banco.numeroConta()) //Valor esperado: 00123-4
console.log(Banco.buscarSaldo()) //Valor esperado: 1500
Banco.deposito(500)
console.log(Banco.buscarSaldo()) //Valor esperado: 2000
Banco.saque(200)
console.log(Banco.buscarSaldo()) //Valor esperado: 1800