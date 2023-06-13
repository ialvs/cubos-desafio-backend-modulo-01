const solucao = require('./distanciaMaxima')


test('a distancia máxima é 5', () => {
    expect(solucao('3\n0 0\n0 3\n4 0')).toBe(5.0)
})

test('a distancia máxima é 54.141371427033505', () => {
    expect(solucao('5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7')).toBe(54.141371427033505)
})

test('a distancia máxima é ?', () => {
    expect(solucao('1\n0')).toBe(0)
})