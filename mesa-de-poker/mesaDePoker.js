function solucao(min, max, valores) {
    return valores.filter(
        valor => valor >= min && valor <= max
    )
    
  }


console.log(solucao(10,14,[7,8,15,12]))

module.exports = solucao