# verify-hmac-sha
[![codecov](https://codecov.io/gh/victor-develop/verify-hmac-sha-256/branch/master/graph/badge.svg?token=8CHV388RXU)](https://codecov.io/gh/victor-develop/verify-hmac-sha-256)
![CI](https://github.com/victor-develop/verify-hmac-sha-256/actions/workflows/node.js.yml/badge.svg)


Simple package to verify HMAC with SHA-256 signature. It is just using the native crypto Node.js module like you see in the official doc. I wrap them all up so that you can do this with fewer lines of code.

## How to use
At most of the time you will just need to use the `verify()` method which returns a true/false

```javascript
const verifyHmac256 = require('verify-hmac-sha')
const secret = 'test-secret'
const payload = JSON.stringify({ example: 123 })
const signature = '0076b0ee1c6ea46ec31c8076b40447097497ab311866dd207fa7708e7a2bcc43'
console.log(
  // do verifyHmac256.encodeInBase64.verify in case of Base64 digest
  // verifyHmac256.encodeIn('base64') also works. Just pass in the encoding you prefer
  // I believe in most cases you will use either encodeInHex or encodeInBase64
  verifyHmac256.encodeInHex.verify({
    signature,
    secret,
    payload
  })
) // true
```


