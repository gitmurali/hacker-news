import { isArraysEqual } from '@helpers/array'

describe('helpers:isArrayEqual', () => {
  it('return true as arrays match', () => {
    expect(isArraysEqual([{ a: '2' }], [{ a: '2' }])).toBe(true)
    expect(isArraysEqual([1], [1])).toBe(true)
  })

  it('return false as arrays match', () => {
    expect(isArraysEqual([{ a: '2' }], [{ b: '2' }])).toBe(false)

    expect(isArraysEqual([1], [2])).toBe(false)
  })
})
