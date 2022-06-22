function comparaNumeros(a,b){
    let igualdade = ""
    let compara10 = ""
    let compara20 = ""
    
    if (a == b ){
        igualdade = "são";
    } else {
        igualdade = "não são";
    }
    if (a+b > 10){
        compara10 = "maior";
    } else {
        compara10 = "menor";
    }
    if (a+b < 20){
        compara20 = "menor";
    } else {
        compara20 = "maior";
    }

    const output = `Os números ${a} e ${b} ${igualdade} iguais. Sua soma é ${a+b}, \
que é ${compara10} que 10 e ${compara20} que 20.`;

    return output
}


var args = process.argv.slice(2);
if ( args.length != 2){
    console.log("Modo de uso:\nPasse 2 argumentos após o nome do programa separados por espaço\nExemplo: \n$ node compara.js 5 10");
    process.exit(1);
}

const n1 = Number(args[0]);
const n2 = Number(args[1]);

output = comparaNumeros(n1,n2);
console.log(output);