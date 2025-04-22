let idade = 17

if (idade < 16) {
    console.log(`Não pode votar.`)
} else if (idade <= 17) {
    console.log(`Voto opcional.`)
} else if (idade >= 18 && idade <= 65) {
    console.log(`Voto obrigatório`)
} else {
    console.log(`Voto não obrigatório`)
}