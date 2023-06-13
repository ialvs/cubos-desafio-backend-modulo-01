const viagemLonga = km => km > 10
const viagemDemorada = min => min > 20

function solucao(min, km) {
    let custoTempo = 50 * min
    let custoDistancia = 70 * km

    if (viagemDemorada(min)) {
        custoTempo = (min - 20) * 30 + 20*50
    }

    if (viagemLonga(km)) {
        custoDistancia = (km - 10) * 50 + 10*70
    }

    return Math.floor(custoTempo + custoDistancia)
}

module.exports = solucao