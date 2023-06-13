const solucao = require('./taximetro')

test('a viagem com 25min e 11.5km custou 1925 centavos', () => {
    expect(solucao(25,11.5)).toBe(1925)
})

test('a viagem com 15min e 9km custou 1380 centavos', () => {
    expect(solucao(15,9)).toBe(1380)
})

