function verificar(a) {
    if (a > 0) {
        console.log(`Número positivo.`); 
    } else {
        console.log(`Número negativo.`);
    }
    return a
}

const verificacao = verificar(5)

console.log(`Resultado: ${verificacao}`);