const solucao = require('./caculaDosAdultos')

test('o adulto caçula da lista 12,18,27 é 18', () => {
    expect(solucao([12,18,27])).toBe(18)
})

test('nenhum adulto na lista 5,12,13,15', () => {
    expect(solucao([5,12,13,15])).toBe('CRESCA E APARECA')
})

