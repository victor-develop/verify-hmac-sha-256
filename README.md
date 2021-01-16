# verify-hmac-256
Simple package to verify HMAC with SHA-256 signature.

## How to use
At most of the time you will just need to use the `verify()` method which returns a true/false

```javascript
const verifyHmac256 = require('verify-hmac-sha')
const secret = 'test-secret'
const payload = JSON.stringify({ example: 123 })
const signature = '0076b0ee1c6ea46ec31c8076b40447097497ab311866dd207fa7708e7a2bcc43'
console.log(
    verifyHmac256.verify({
        {
            signature,
            secret,
            payload
        }
    })
) // true
```

