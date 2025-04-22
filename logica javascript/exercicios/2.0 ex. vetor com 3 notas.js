const notas = [8, 8, 8]

const calcularMedia = (notas) => {
    const soma = notas.reduce((soma, recente) => (soma + recente) / 3)
    console.log(notas)
    console.log(soma);
}

const media = calcularMedia(notas)