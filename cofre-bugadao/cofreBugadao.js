function processData(input) {
    const senhaCorreta = input.split('\n')[0]
    const senhaInserida = input.split('\n')[1]
    
    let cofreAberto = false
    let posicaoProximaLetra = 0;

    for (let i = 0; i < senhaInserida.length; i++) {
        if (senhaInserida[i] === senhaCorreta[posicaoProximaLetra]) {
            posicaoProximaLetra++;
            if (posicaoProximaLetra === senhaCorreta.length) {
                cofreAberto = true
                break;
            }
        }
    }

    return cofreAberto ? 'SIM' : 'NAO'
}

console.log(processData('abcd\nahbdjabcdcid'))
const cubos = 'cubos'
// console.log(cubos.slice(1))
// console.log(cubos.slice(2, cubos.length - 0))
// console.log()

module.exports = processData