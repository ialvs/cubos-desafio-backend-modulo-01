function solucao(precos) {

    const precoTotal = precos.reduce(
        (acumulador, precoAtual) => acumulador + precoAtual
    )

    if (precos.length < 3) {
        return precoTotal
    }
    
    const menorPreco = precos.reduce(
        (menorPreco, precoAtual) => {
            menorPreco > precoAtual ? menorPreco = precoAtual : ''
            return menorPreco
        }
    )

    return precoTotal - menorPreco/2

}

[3,3].length

module.exports = solucao