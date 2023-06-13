const cartasManilha = {
    Q: 'J',
    J: 'K',
    K: 'A',
    A: '2',
    2: '3',
    3: 'Q'
}

function solucao(carta) {
    return cartasManilha[carta.toString()]
}

module.exports = solucao