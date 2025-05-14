const numeros = [1, 2, 3, 4, 5];

function printNumbers() {
    for (let i = 0; i < numeros.length; i++) {
        const imprimir = () => console.log(numeros[i]);
        imprimir();
    }
}