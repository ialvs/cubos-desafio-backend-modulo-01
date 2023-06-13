const solucao = require('./promocao')

test('valor total de compra 150,50 é 200', () => {
    expect(solucao([150,50])).toBe(200)
})

test('valor total de compra 100,100,100 é 250', () => {
    expect(solucao([100,100,100])).toBe(250)
})

test('valor total de compra 200,150,50,100 é 475', () => {
    expect(solucao([200,150,50,100])).toBe(475)
})