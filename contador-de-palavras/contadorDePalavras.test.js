const solucao = require('./contadorDePalavras')

test("'Um texto qualquer' tem 3 palavras", () => {
    expect(solucao('Um texto qualquer')).toBe(3)
})

test("'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ' tem 14 palavras", () => {
    expect(solucao('Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ')).toBe(14)
})

test("'' não tem palavras", () => {
    expect(solucao('')).toBe(0)
})

test("'Olá' tem 1 palavra", () => {
    expect(solucao('Olá')).toBe(1)
})

test("'Olá, mundo' tem 2 palavras", () => {
    expect(solucao('Olá, mundo')).toBe(2)
})