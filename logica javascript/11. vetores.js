// Criando um vetor:
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)

// Acessar elementos específicos:
console.log(frutas[0])
console.log(frutas[1])

// Adicionando elemento: 
frutas.push('Uvas')
console.log(frutas)

// Remover elemento:
frutas.pop() // Remove o último elemento.
console.log(frutas)

frutas.splice(1,1) // Remove apenas o segundo elemento.
console.log(frutas);

// Percorrendo o vetor
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})
