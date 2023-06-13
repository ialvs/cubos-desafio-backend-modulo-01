function solucao(lista) {

    const adultos = lista.filter(
        idade => idade >= 18
    )

    if (adultos.length > 0) {
        return adultos.reduce(
            (menorIdade, idadeAtual) => {
                menorIdade > idadeAtual ? menorIdade = idadeAtual : ''
                return menorIdade
            }
        )
    } else {
        return 'CRESCA E APARECA'
    }

}

module.exports = solucao