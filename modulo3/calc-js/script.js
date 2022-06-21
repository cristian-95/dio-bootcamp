function calc(){
    const operacao = Number(prompt("\tCalc-js\
    \n1 → soma\
    \n2 → subtração\
    \n3 → multiplicação\
    \n4 → divisão\
    \n5 → resto da divisão\
    \n6 → potênciação\n"));
    if (!operacao || operacao >= 7){
        alert ("ERRO: operação inválida.");
        calc();
    }

    n1 = Number(prompt("digite o primeiro operando: "));
    n2 = Number(prompt("digite o segundo operando: "));
    if (!n2 || !n2){
        alert("ERRO: valores inválidos.");
        calc();
    }else{
        switch (operacao){
            case 1:
                soma(n1,n2);
                break;
            case 2:
                subtrai(n1,n2);
                break;
            case 3:
                multiplica(n1,n2);
                break;
            case 4:
                divisao(n1,n2);
                break;
            case 5:
                divisaoReal(n1,n2);
                break;
            case 6:
                potencia(n1,n2);
                break;
        }
    }
}

function sair(){
    let op = prompt("Deseja fazer outro calculo? (s/n)");
    if (op === "s" || op === "S" ){
        calc();
    } else{
        alert("Tchau👋");
    }

}

function soma(a,b){
    alert(`${a} + ${b} = ${a+b}` )
    sair();
}
function subtrai(a,b){
    alert(`${a} - ${b} = ${a-b}` )
    sair();
}
function multiplica(a,b){
    alert(`${a} * ${b} = ${a*b}` )
    sair();
}
function divisao(a,b){
    alert(`${a} / ${b} = ${a/b}` )
    sair();
}
function divisaoReal(a,b){
    alert(`o resto da divisão de ${a} por  ${b} é ${a%b}` )
    sair();
}
function potencia(a,b){
    alert(`${a} elevado a ${b} é igual á ${a**b}` )
    sair();
}

calc();