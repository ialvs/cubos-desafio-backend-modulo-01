const solucao = require('./somaDosElementos')

test('somar lista com 1,2,3,4', () => {
    expect(solucao([1,2,3,4])).toBe(10)
})

test('somar lista com 0,0,0,0', () => {
    expect(solucao([0,0,0,0])).toBe(0)
})

test('somar lista com 1,1,1,1,1,1,1', () => {
    expect(solucao([1,1,1,1,1,1,1])).toBe(7)
})

test('somar lista com 10,10,10', () => {
    expect(solucao([10,10,10])).toBe(30)
})