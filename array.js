function duplicarNumeros(array: number[]): number[] {
    return array.map(num => num * 2);
}

const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = duplicarNumeros(numeros);
console.log(numerosDuplicados);

function filtrarNumerosPares(array: number[]): number[] {
    return array.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5];
const numerosPares = filtrarNumerosPares(numbers);
console.log(numerosPares); 


function sumarNumeros(array: number[]): number {
    return array.reduce((acumulador, num) => acumulador + num, 0);
}

const num = [1, 2, 3, 4, 5];
const sumaTotal = sumarNumeros(num);
console.log(sumaTotal);
