const solucao = require('./numerosDentroDeUmIntervalo')

test('10 pertence ao conjunto entre 5 e 20', () => {
    expect(solucao(10,5,20)).toBe('PERTENCE')
})

test('35 não pertence ao conjunto entre 10 e 20', () => {
    expect(solucao(35,10,20)).toBe('NAO PERTENCE')
})

test('-2 pertence ao conjunto entre -35 e 100', () => {
    expect(solucao(-2,-35,10)).toBe('PERTENCE')
})