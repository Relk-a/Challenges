export function procesarLista(numeros: number[], S: number): void {
    const filtrarDigitos = (num: number, S: number): number | null => {
        let resultado = 0;
        let multiplicador = 1;
        while (num > 0) {
            const digito = num % 10;
            if (digito < S) {
                resultado += digito * multiplicador;
                multiplicador *= 10;
            }
            num = Math.floor(num / 10);
        }
        return resultado === 0 ? null : resultado;
    };

    const numerosFiltrados = numeros.reduce((acumulador, num) => {
        const numFiltrado = filtrarDigitos(num, S);
        if (numFiltrado !== null) {
            acumulador.push(numFiltrado);
        }
        return acumulador;
    }, [] as number[]);

    const numerosRevertidos = numerosFiltrados.reverse();

    console.log(numerosRevertidos);
}

const numeros = [12, 30, 23, 31, 3, 0, 13, 21];
const S = 3;
procesarLista(numeros, S);