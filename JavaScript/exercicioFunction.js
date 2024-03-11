// Exercicio 1
function notasAluno(a, b, c) {
    const mediaDasNotas = (a + b + c) / 3;
    console.log(`Media das tres provas ${mediaDasNotas}`);
}

notasAluno(7, 8, 9);

//Exercicio 2

function notasAlunoAdaptado(a, b, c){
const mediaDasNotasNormais = (a + b + c) / 3;
return mediaDasNotasNormais
}

function calculoProvaFinal(a, b, c, d) {
    const mediaSemProvaFinal = notasAlunoAdaptado(a, b, c);
    const mediaFinal = (mediaSemProvaFinal + d) / 2;
    console.log(`O resultado com a prova final e: ${mediaFinal}`);
}

calculoProvaFinal(7, 8, 9, 10);

// Exercicio 3

function cParaF(celcius) {
const temEmFarenheit = (9/5) * celcius + 32;
console.log(`A temperatura em Farenheit e: ${temEmFarenheit}*F`);
} 
cParaF(35)

//Exercicio 4

function compraComImposto(valorProduto) {
   const calculoComImposto = valorProduto * 1.1 ;
// para calcular porcentagem deve se colocar o valor do imposto, dividido por 100%, agora soma 1 mais o resultado da divisao.
//exemplificado: imposto (10 / 100 = 0,1000 + 1 = 1,1000 
   console.log(`Valor do produto com o imposto incluso: R$ ${calculoComImposto}`);
}

compraComImposto(10);