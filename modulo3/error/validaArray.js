function validarArray(array, num){
    if (!array || !num){
        throw new ReferenceError("Faltando parâmetros");
    }
    if (!(array instanceof Object)) {
    throw new TypeError("Parâmetro array com tipo inválido\nesperado: Object, recebido: "+typeof array);    
    }
    if (typeof num != "number"){
        throw new TypeError("Parâmetro num com tipo inválido\nesperado: number, recebido: "+typeof num );
    }
    if (Number(array.length) != num){
        throw new RangeError("Array inválido, tamanho diferente de "+num);
    }
    return "Array válido!"
}

const ARR = ["ok", 1, true];
const ARR_LENGTH = ARR.length
console.log(validarArray(ARR,ARR_LENGTH));

try{
    validarArray();
} catch (erroSemParametro){
    console.error("\nERRO: " + erroSemParametro);
}

try{
    validarArray("array",5);
} catch(erroInstaceOf){
    console.error("\nERRO: " + erroInstaceOf);
}

try{
    validarArray(["array"],true);
} catch(erroNumberType){
    console.error("\nERRO: " + erroNumberType);
}

try{
    validarArray(["1",2,true],5);
} catch(erroArrayInvalida){
    console.error("\nERRO: " + erroArrayInvalida);
}


