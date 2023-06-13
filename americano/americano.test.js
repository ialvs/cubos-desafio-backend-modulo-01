const solucao = require('./americano')

test('o jogador no set 1,3,2,1 que será o goleiro é o 3', () => {
    expect(solucao([1,3,2,1])).toBe(3)
})

test('o jogador no set 1,1,1 que será o goleiro é o 3', () => {
    expect(solucao([1,1,1])).toBe(3)
})

test('o jogador no set 1,1,1,7,5 que será o goleiro é o 5', () => {
    expect(solucao([1,1,1,7,5])).toBe(5)
})