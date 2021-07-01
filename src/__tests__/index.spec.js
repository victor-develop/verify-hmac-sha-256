'use strict'

const verifyHmac256 = require('..')
const secret = 'test-secret'
const payload = JSON.stringify({ example: 123 })
const signatureInHex = '0076b0ee1c6ea46ec31c8076b40447097497ab311866dd207fa7708e7a2bcc43'
const signatureInBase64 = 'AHaw7hxupG7DHIB2tARHCXSXqzEYZt0gf6dwjnorzEM='

describe('verify-hmac-sha 1.2 backward compatibile interface', () => {
  test('hash', () => {
    expect(verifyHmac256.hash({ secret, payload })).toEqual(signatureInHex)
  })
  test('verify', () => {
    expect(verifyHmac256.verify({ signature: signatureInHex, secret, payload })).toBe(true)
  })
})

describe('verify-hmac-sha', () => {
  describe('digest encoding in hex', () => {
    test('hash', () => {
      expect(verifyHmac256.encodeInHex.hash({ secret, payload })).toEqual(signatureInHex)
    })
    test('verify', () => {
      expect(verifyHmac256.encodeInHex.verify({ signature: signatureInHex, secret, payload })).toBe(true)
    })
  })
  describe('digest encoding in base64', () => {
    test('hash', () => {
      expect(verifyHmac256.encodeInBase64.hash({ secret, payload })).toEqual(signatureInBase64)
    })
    test('verify', () => {
      expect(verifyHmac256.encodeInBase64.verify({ signature: signatureInBase64, secret, payload })).toBe(true)
    })
  })
})
