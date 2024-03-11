let casa = {
    cor: "pink", sala: 30, cozinha: 23, banheiro: 10, quarto: 26,
    calcularTamanhoTotalDaCasa: function (){
        const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
        console.log(`O tamanho total da casa e: ${tamanhoTotal}M2`);
    }
}
casa.calcularTamanhoTotalDaCasa();