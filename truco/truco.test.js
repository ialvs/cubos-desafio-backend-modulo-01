const solucao = require('./truco')

test('manilha da carta Q', () => {
    expect(solucao('Q')).toBe('J')
})

test('manilha da carta J', () => {
    expect(solucao('J')).toBe('K')
})

test('manilha da carta K', () => {
    expect(solucao('K')).toBe('A')
})

test('manilha da carta A', () => {
    expect(solucao('A')).toBe('2')
})

test('manilha da carta 2', () => {
    expect(solucao('2')).toBe('3')
})

test('manilha da carta 3', () => {
    expect(solucao('3')).toBe('Q')
})