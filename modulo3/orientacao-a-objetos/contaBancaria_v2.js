class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor <= this._saldo){
            this._saldo -= valor;
            return this._saldo;
        }
        return  "Operação negada! Saldo insuficiente.";
    }
    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito(cartaoInfo){
        this._cartaoDeCredito = cartaoInfo;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitaria";
    }
    sacar(valor){
        if (valor <= 500 && valor <= this.saldo){
            this.saldo -= valor;
            return this.saldo; 
        }
        if (valor > 500 && valor <= this.saldo){
            return "Operação negada! Valor acima do limite de saque para contas universitárias.";
        }
        if (valor <= 500.00 && valor > this.saldo){
            return "Operação negada! Saldo insuficiente."
        }       
    }
}