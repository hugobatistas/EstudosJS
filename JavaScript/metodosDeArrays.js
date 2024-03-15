const listaNotas = [
    {nome: "Hugo", notas: 15},
    {nome: "Guilherme", notas: 17},
    {nome: "Julio", notas: 20},
    {nome: "Samuel", notas: 5},
    {nome: "Joelson", notas: 12},
    {nome: "Gabriel", notas: 8},
]

// Usando metodo Filter
const alunosAprovados = listaNotas.filter(
    function(aluno){
        return aluno.notas >= 10;
    }
)
// Mesmo metodo de filter
const alunosReprovados = listaNotas.filter(
    function(aluno){
       return aluno.notas <= 10;
}
)
console.log(alunosAprovados);
console.log(alunosReprovados);

// Usando o metodo Find

const alunoQueTirouCinco = listaNotas.find(
    function (aluno) {
        return aluno.notas === 5;
    }
)
console.log(alunoQueTirouCinco);

// Usando metodo Map
const alunosAprovadosN = alunosAprovados.map(
    function(aluno) {
        return aluno.nome;
    }
)

console.log(alunosAprovadosN)