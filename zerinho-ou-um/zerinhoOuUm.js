function solucao(jogadores) {

    const jogouZero = jogadores.filter(
        jogador => jogador.jogada === 0
    )

    const jogouUm = jogadores.filter(
        jogador => jogador.jogada === 1
    )

    if (jogouZero.length === 1) {
        return jogouZero[0].nome
    
    } else if (jogouUm.length === 1) {
        return jogouUm[0].nome
    
    } else {
        return 'NINGUEM'
    }

}

module.exports = solucao