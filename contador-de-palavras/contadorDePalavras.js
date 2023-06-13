function solucao(texto) {
    return texto.split(' ').filter(
        palavra => palavra != ''
    ).length
}

module.exports = solucao