// Calculando ao Quadrado e saindo o resultado
function calcularAoQuadrado(number) {
const resultadoDois = number ** (2);
console.log(`O valor ao quadrado sera: ${resultadoDois}`);
return resultadoDois
}

// Resolvendo Bhaskara e saindo o resultado na tela
function resolverBhaskara(a, b, c) {
    const delta = b**2 - 4*a*c;
  const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
  const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);

  console.log(`Os Dois valores de x sao: ${x1} e ${x2}`);

}

// Calculando a raiz quadrada ligada ao Bhaskara
function calcularRaizQuadrada(base) {
    return base**(1/2);
}

resolverBhaskara(49, 58, -29);
calcularAoQuadrado(8);