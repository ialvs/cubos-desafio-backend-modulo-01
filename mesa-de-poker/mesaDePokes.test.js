const solucao = require('./mesaDePoker')

test('lista 0,5,6,10,11 nos limites 2 e 10', () => {
    expect(solucao(2,10,[0,5,6,10,11])).toStrictEqual([5,6,10])
})

test('lista 0,0,0,0,0 nos limites 2 e 10', () => {
    expect(solucao(2,10,[0,0,0,0,0])).toStrictEqual([])
})

test('lista 7,8,15,12 nos limites 10 e 14', () => {
    expect(solucao(10,14,[7,8,15,12])).toStrictEqual([12])
})

test('lista 7,8,15,12 nos limites 6 e 14', () => {
    expect(solucao(6,14,[11,7,8,15,12])).toStrictEqual([11,7,8,12])
})