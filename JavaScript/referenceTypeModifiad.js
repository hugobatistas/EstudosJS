const cartao1 = {
    name: "Hugo Batista",
    saldo: 10000,
};
const cartao2 = cartao1;
console.log(cartao1);
console.log(cartao2);

cartao2.saldo -= 2999;
cartao2.name = "Gabriel Aires"

console.log(cartao1);
console.log(cartao2);

cartao2.name = "Guilherme Batista";
cartao2.saldo = 1000000;

console.log(cartao2);

//erro Ja esperado pois nao se troca o que tem dentro do array
const listName = ["Vini", "Aires", "Bruno"]; //0, 1, 2...

listName = ["Luiz",];
console.log(listName);