class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo(){
        return this.saldo;
    }
    set saldo(saldo){
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo){
            this.saldo -= valor;
        }               
    }
    depositar(valor){
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo = "conta corrente", saldo, cartaoDeCredito){
        super(agencia, numero, tipo, saldo);
        this.cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this.cartaoDeCredito;
    }
    set cartaoDeCredito(cartaoInfo){
        this.cartaoDeCredito = cartaoInfo;
    }
}

class ContaPoupança extends ContaBancaria {
    constructor(agencia, numero, tipo = "conta poupança" , saldo){
        super(agencia, numero, tipo, saldo);
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo= "conta universitária", saldo){
        super(agencia, numero, tipo, saldo);
    }
    saque(valor){
        if (valor < 500.00 && valor <= this.saldo){
            this.saldo -= valor;
        }
    }
}