function solucao(numero, limiteInferior, limiteSuperior) {
    
    const pertenceAoConjunto = numero >= limiteInferior && numero <= limiteSuperior
    
    return pertenceAoConjunto ? 'PERTENCE' : 'NAO PERTENCE'
}

module.exports = solucao