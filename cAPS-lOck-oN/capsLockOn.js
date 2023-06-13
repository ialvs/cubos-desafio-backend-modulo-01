const letraMaiuscula = letra => letra === letra.toUpperCase()

const tudoMaiusculo = palavra => palavra.split('').every(letraMaiuscula)

const primeiraLetraMinusculaRestoMaiusculo =
    palavra => (!letraMaiuscula(palavra[0])) && tudoMaiusculo(palavra.slice(1))

const estaEmCaps = palavra => tudoMaiusculo(palavra) || primeiraLetraMinusculaRestoMaiusculo(palavra)


function processData(input) {

    if (!estaEmCaps(input)) {
        return input
    } else {

        return input.split('').map(
            letra => {
                return letraMaiuscula(letra) ? letra.toLowerCase() : letra.toUpperCase()
            }
        ).join('')
    }
}


module.exports = processData