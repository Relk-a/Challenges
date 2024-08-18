function cambioNoConstruible(monedas: number[]): number {
    monedas.sort((a, b) => a - b);

    let cambioActualCreado = 0;

    for (const moneda of monedas) {
        if (moneda > cambioActualCreado + 1) {
            return cambioActualCreado + 1;
        }
        cambioActualCreado += moneda;
    }

    return cambioActualCreado + 1;
}

const monedas1 = [5, 7, 1, 1, 2, 3, 22];
console.log(cambioNoConstruible(monedas1));

const monedas2 = [1, 1, 1, 1, 1];
console.log(cambioNoConstruible(monedas2));

const monedas3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];
console.log(cambioNoConstruible(monedas3));