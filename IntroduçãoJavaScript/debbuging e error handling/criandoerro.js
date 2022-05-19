//função que recebe um array e um número
function validaArray(arr, num) {  //validações
    try { //declaração try catch
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if (typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr; //caso de sucesso
    }
    catch(e) { //filtrar por tipo de erro, vai realizar operações diferentes de acordo com o erro
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }   else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }   else if (e instanceof RangeError) {
            console.log("Este erro é um RangeErro!")
            console.log(e.message)
        }   else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray()); //chama a função