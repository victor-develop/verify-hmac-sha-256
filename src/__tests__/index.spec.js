'use strict'

const verifyHmac256 = require('..')
const secret = 'test-secret'
const payload = JSON.stringify({ example: 123 })
const signature = '0076b0ee1c6ea46ec31c8076b40447097497ab311866dd207fa7708e7a2bcc43'

describe('verify-hmac-sha-256', () => {
  test('hash', () => {
    expect(verifyHmac256.hash({ secret, payload })).toEqual(signature)
  })
  test('verify', () => {
    expect(verifyHmac256.verify({ signature, secret, payload })).toBe(true)
  })
})
