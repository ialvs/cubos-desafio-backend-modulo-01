function solucao(numeros) {
    
    const somaDasJogadas = numeros.reduce(
        (acumulador,numeroAtual) => acumulador + numeroAtual
    )

    return somaDasJogadas % numeros.length === 0 ? numeros.length : somaDasJogadas % numeros.length
 
}

module.exports = solucao
