const solucao = require('./mediaAritimetica')

test('media lista com 2,3,4', () => {
    expect(solucao([2,3,4])).toBe(3)
})

test('media lista com 10,10,10', () => {
    expect(solucao([10,10,10])).toBe(10)
})

test('media lista com 5,5,5', () => {
    expect(solucao([5,5,5,5])).toBe(5)
})