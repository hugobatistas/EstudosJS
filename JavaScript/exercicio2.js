console.log("resultado do Exercicio 2:");

const listaNumerica = [545, 367, 356, 83, 25];

console.log(`Primeira variavel: ${listaNumerica[0]}`);
console.log(`O valor do elemento 3 corresponde a ${listaNumerica[2]}`);

console.log("Variavel Object")
const pokemon1 = {
name: "ratata",
estamina: 43,
defesa: 21,
ataque: 15,
habilidade: "fugir",
};

console.log(`Meu objeto pokemon possui nome: ${pokemon1.name}`);
console.log(`Meu objeto pokemon possui estamina: ${pokemon1.estamina}`);
console.log(`Meu objeto pokemon possui defesa: ${pokemon1.defesa}`);
console.log(`Meu objeto pokemon possui ataque: ${pokemon1.ataque}`);
console.log(`Meu objeto pokemon possui habilidade: ${pokemon1.habilidade}`);


console.log("Valores aritimetricos:");
const number1 = 21;
const number2 = 35;

//soma dos dois modos possiveis por enquanto
console.log(`conta de mais: ${number1 + number2}`);
const mais = number1 + number2;
console.log(mais);

//subtracao dos dois modos possiveis por enquanto
console.log(`conta de menos: ${number1 - number2}`);
const menos = number1 - number2;
console.log(menos);

//divisao dos dois modos possiveis por enquanto
console.log(`Divisao: ${number1 / number2}`);
const divisao = number1 / number2;
console.log(divisao)

//multiplicacao dos dois modos possiveis por enquanto
console.log(`conta de multiplicacao: ${number1 * number2}`);
const multi = number1 * number2;
console.log(multi);


console.log("Comparadores:")
console.log(`21 e maior que 35: ${number1 > number2}`);
console.log(`21 e menor que 35: ${number1 < number2}`);
console.log(`21 e igual a 35: ${number1 === number2}`);