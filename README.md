# sfp-auth-token
[![Build Status](https://travis-ci.org/hipush/sfp-auth-token.svg?branch=master)](https://travis-ci.org/hipush/sfp-auth-token)
[![Dependency Status](https://david-dm.org/hipush/sfp-auth-token.svg?theme=shields.io)](https://david-dm.org/hipush/sfp-auth-token)
[![devDependency Status](https://david-dm.org/hipush/sfp-auth-token/dev-status.svg?theme=shields.io)](https://david-dm.org/hipush/sfp-auth-token#info=devDependencies)

Encrypting and decrypting authentication token of Safari Push Notifications.

## Install

```
npm install sfp-auth-token
```

## Usage

```js
var sfpAuthToken = require('sfp-auth-token');

sfpAuthToken.crypt('my-id', 'salt')
.then(function (token) {
  console.log(token); // TFzEUPY47RFOdtfeXWiwtw==
});

sfpAuthToken.decrypt('TFzEUPY47RFOdtfeXWiwtw==', 'salt')
.then(function (clear) {
  console.log(clear); // 'my-id'
});
```

### sfpAuthToken.crypt(plain, key)

Crypt an authentication token.

### sfpAuthToken.decrypt(crypted, key)

Uncrypt an authentication token.


## License

MIT
