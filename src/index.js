'use strict'

const crypto = require('crypto')

const hash =
    ({ secret, payload }) => {
      return crypto.createHmac('sha256', secret).update(payload).digest('hex')
    }

const verify = ({ signature, secret, payload }) => crypto.timingSafeEqual(
  Buffer.from(signature),
  Buffer.from(hash({ secret, payload }))
)

module.exports = {
  hash, verify
}
