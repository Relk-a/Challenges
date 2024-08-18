function arregloCuadradoOrdenado(arr: number[], S: number): number[] {
    const n = arr.length;
    const resultado = new Array(n);
    let izquierda = 0;
    let derecha = n - 1;
    let indice = n - 1;
    const rangoMaximo = S * 11;

    while (izquierda <= derecha) {
        const cuadradoIzquierda = arr[izquierda] * arr[izquierda];
        const cuadradoDerecha = arr[derecha] * arr[derecha];

        if (cuadradoIzquierda > cuadradoDerecha) {
            if (cuadradoIzquierda <= rangoMaximo) {
                resultado[indice] = cuadradoIzquierda;
                indice--;
            }
            izquierda++;
        } else {
            if (cuadradoDerecha <= rangoMaximo) {
                resultado[indice] = cuadradoDerecha;
                indice--;
            }
            derecha--;
        }
    }

    const resultadoFiltrado = resultado.filter(num => num !== undefined);

    return resultadoFiltrado;
}

const S = 3;
const arr1 = [1, 2, 3, 5, 6, 8, 9];
const arr2 = [-2, -1];
const arr3 = [-6, -5, 0, 5, 6];
const arr4 = [-10, 10];

console.log(arregloCuadradoOrdenado(arr1, S));
console.log(arregloCuadradoOrdenado(arr2, S));
console.log(arregloCuadradoOrdenado(arr3, S));
console.log(arregloCuadradoOrdenado(arr4, S));