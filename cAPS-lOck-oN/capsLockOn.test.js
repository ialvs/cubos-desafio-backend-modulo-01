const solucao = require('./capsLockOn')

test("'iAN' vai ser corrigida para 'Ian'", () => {
    expect(solucao('iAN')).toBe('Ian')
})

test("'Peste' não vai ser corrigida", () => {
    expect(solucao('Peste')).toBe('Peste')
})

test("'OGRO' vai ser corrigida para 'ogro'", () => {
    expect(solucao('OGRO')).toBe('ogro')
})

test("'cão' não vai ser corrigida", () => {
    expect(solucao('cão')).toBe('cão')
})

test("'cAPS' vai ser corrigida para 'Caps'", () => {
    expect(solucao('cAPS')).toBe('Caps')
})

test("'lock' não vai ser corrigida", () => {
    expect(solucao('lock')).toBe('lock')
})

test("'CAPS' vai ser corrigida para 'caps'", () => {
    expect(solucao('CAPS')).toBe('caps')
})