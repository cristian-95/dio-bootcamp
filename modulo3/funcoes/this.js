function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const cristian = {
    "nome": "Cristian",
    "idade": 27
}

//call
console.log(calculaIdade.call(cristian, 5));

//apply (sintaxe de array)
console.log(calculaIdade.apply(cristian,[3000]));
