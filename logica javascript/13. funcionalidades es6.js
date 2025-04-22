// Criando um vetor objetos:
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}
]

console.log('Listando todos os usuários: ');
usuarios.forEach(usuario => 
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)
)

// Filtrar idade maior que 30:
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)
// console.log(idadeMaiorQue30);

console.log('\nIdade maior que 30: ');
idadeMaiorQue30.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`);
})

// Encontrar um usuário específico:
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Marta')
// Devolve um objeto:
console.log('\nEncontrando usuário: ');
console.log(usuarioEncontrado); // Resposta como objeto
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`);

// Buscar em uma lista apenas um nome:
console.log('\nLista com nomes dos usuários: ')
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

// 
console.log('\nLista com nomes dos usuários - numerado: ');
apenasNomes.forEach((nome, index) => console.log(`${index}: ${nome}`));

// i = 1
// console.log(i++);
// console.log(i);
// y = 10
// console.log(++y);

// Somando todas as idades:
console.log('\nSoma de todas as idades: ');
const somaIdade = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das idades: ${somaIdade}`);

// Transformar elementos:
console.log('\nOperação de multiplicação - dobrar valor: ')
const numeros = [2, 4, 6, 8]
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numeros)
console.log(numerosDobrados)

console.log('\nFiltrando números pares: ')
const pares = numeros.filter(numero => numero % 2 == 0)
console.log(pares)