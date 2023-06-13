function processData(input) {

    const linhas = input.split('\n')

    const coordenadas = linhas.slice(1).map(
        coordenada => {
            return coordenada.split(' ').map(
                coordenada => parseFloat(coordenada)
            )
        }
    )

    const distancias = []

    for (const coordenada of coordenadas) {

        for (const coordenada2 of coordenadas) {
            if (coordenada.join('') !== coordenada2.join('')) {
                distancias.push(Math.sqrt((coordenada[0] - coordenada2[0]) ** 2 + (coordenada[1] - coordenada2[1]) ** 2))
            }
        }
    }

    const maiorDistancia = distancias.reduce(
        (maiorDistancia,distanciaAtual) => {
            maiorDistancia < distanciaAtual ? maiorDistancia = distanciaAtual : ''
            return maiorDistancia
        }, 0
    )

    console.log(maiorDistancia)
    return maiorDistancia
}

console.log(processData('3\n0 0\n0 3\n4 0'))


module.exports = processData
