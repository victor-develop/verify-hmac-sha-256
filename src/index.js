'use strict'

const crypto = require('crypto')

const hashDigest = (digestEncoding) => ({ secret, payload }) => {
  return crypto.createHmac('sha256', secret).update(payload).digest(digestEncoding)
}

const verify = hash => ({ signature, secret, payload }) => crypto.timingSafeEqual(
  Buffer.from(signature),
  Buffer.from(hash({ secret, payload }))
)

const encodeIn = (encoding) => {
  const hash = hashDigest(encoding)
  const verifyInSuchEncoding = verify(hash)
  return {
    hash,
    verify: verifyInSuchEncoding
  }
}

const encodeInHex = encodeIn('hex')
const encodeInBase64 = encodeIn('base64')

const mod = {
  // only for backward compatibility to expose this at top level
  ...encodeInHex,
  encodeInHex: encodeInHex,
  encodeInBase64
}

module.exports = mod
