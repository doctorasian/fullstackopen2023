const reverse = require('../utils/practice_test').reverse

describe('reverser', () => {
  test('reverse of a', () => {
    const actual = reverse('a')

    expect(actual).toBe('a')
  })

  test('reverse of react', () => {
    const actual = reverse('react')

    expect(actual).toBe('tcaer')
  })

  test('reverse of releveler', () => {
    const result = reverse('releveler')

    expect(result).toBe('releveler')
  })
})