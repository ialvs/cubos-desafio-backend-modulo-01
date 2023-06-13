function solucao(lista) {
    
    return lista.reduce(
        (acumulador,atual) => acumulador + atual
    ) / lista.length

}

module.exports = solucao