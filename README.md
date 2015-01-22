# spn-auth-token
[![Build Status](https://travis-ci.org/hipush/spn-auth-token.svg?branch=master)](https://travis-ci.org/hipush/spn-auth-token)
[![Dependency Status](https://david-dm.org/hipush/spn-auth-token.svg?theme=shields.io)](https://david-dm.org/hipush/spn-auth-token)
[![devDependency Status](https://david-dm.org/hipush/spn-auth-token/dev-status.svg?theme=shields.io)](https://david-dm.org/hipush/spn-auth-token#info=devDependencies)

Encrypting and decrypting authentication token of Safari Push Notifications.

## Install

```
npm install spn-auth-token
```

## Usage

```js
var spnAuthToken = require('spn-auth-token');

spnAuthToken.crypt('my-id', 'salt')
.then(function (token) {
  console.log(token); // TFzEUPY47RFOdtfeXWiwtw==
});

spnAuthToken.decrypt('TFzEUPY47RFOdtfeXWiwtw==', 'salt')
.then(function (clear) {
  console.log(clear); // 'my-id'
});
```

### spnAuthToken.crypt(plain, key)

Crypt an authentication token.

### spnAuthToken.decrypt(crypted, key)

Uncrypt an authentication token.


## License

MIT
