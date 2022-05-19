function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {  //valor anterior e atual
        return prev + current;
    });
}

const arr = [1, 2];  //array

console.log(somaNumeros(arr));