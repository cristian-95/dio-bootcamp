function compara(a,b){
    let igualdade = ""
    let condicao1 = "" // a soma de a e b é maior que 10 ?
    let condicao2 = "" // a soma de a e b é menor que 20 ?
    
    if (a == b ){
        igualdade = "iguais";
    } else {
        igualdade = "diferentes";
    }
    if (a+b > 10){
        condicao1 = "maior";
    } else {
        condicao1 = "menor";
    }
    if (a+b < 20){
        condicao2 = "menor";
    } else {
        condicao2 = "maior";
    }

    let output = `Os números ${a} e ${b} são ${igualdade}. Sua soma é ${a+b}, \
que é ${condicao1} que 10 e ${condicao2} que 20.`;

    console.log(output);
}

var args = process.argv.slice(2);

if ( args.length != 2){
    console.log("Modo de uso:\nPasse 2 argumentos após o nome do programa separados por espaço\nExemplo: \n$ node compara.js 5 10");
    process.exit(1);
}
const n1 = Number(args[0]);
const n2 = Number(args[1]);
compara(n1,n2);
