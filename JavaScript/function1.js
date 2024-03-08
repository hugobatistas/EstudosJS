console.log("Exemplo de comanda!");

//modo errado.
//console.log("Ola, Boa noite!")
//console.log("Pegue aqui sua comanda!")
//console.log("Bom apetite!")
console.log("----------------------------------")
// desse modo eu teria que escrever a cada comanda que iria ser tirada.

// Modo correto.
function pegarComanda() {
    console.log("Ola, Boa noite!")
console.log("Pegue aqui sua comanda!")
console.log("Bom apetite!")
console.log("----------------------------------")
}
// Ate aqui so aparecera o modo errado na tela pq voce nao deu o comando para imprimir a comanda.

//apos o codigo abaixo, o js irar imprimir uma nova comanda (sem ele nao imprimirar uma nova).
pegarComanda();
pegarComanda();

// Nova demanda em function parametro da funcao e argumento: 
function calcularAoQuadrado(numberAdd) {
console.log("---------------------------------------------------------------------");
console.log(`O numero da vez e ${numberAdd}`);
console.log(`O numero da vez ${numberAdd} ao quadrado e igual= ${numberAdd ** 2}`);
};
calcularAoQuadrado(30);
calcularAoQuadrado(10);
calcularAoQuadrado(12);