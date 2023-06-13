const solucao = require('./cofreBugadao')

test('senha "cubos" abre com "cuggbyos"', () => {
    expect(solucao('cubos\ncuggbyos')).toBe('SIM')
})

test('senha "cubos" não abre com "ewvelrabsocaeln"', () => {
    expect(solucao('cubos\newvelrabsocaeln')).toBe('NAO')
})

test('senha "cubos" não abre com ""', () => {
    expect(solucao('cubos\n')).toBe('NAO')
})

test('senha "abcd" não abre com "abraco de urso"', () => {
    expect(solucao('abcd\nabraco de urso')).toBe('SIM')
})

test('senha "abcd" abre com "azzzbyyyclld"', () => {
    expect(solucao('abcd\nazzzbyyyclld')).toBe('SIM')
})

const testString = 'ahbdjabcdcid'

test(`senha "abcd" abre com "${testString}"`, () => {
    expect(solucao(`abcd\n${testString}`)).toBe('SIM')
})