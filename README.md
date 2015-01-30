# spn-auth-token
[![Build Status](https://travis-ci.org/hipush/spn-auth-token.svg?branch=master)](https://travis-ci.org/hipush/spn-auth-token)
[![Dependency Status](https://david-dm.org/hipush/spn-auth-token.svg?theme=shields.io)](https://david-dm.org/hipush/spn-auth-token)
[![devDependency Status](https://david-dm.org/hipush/spn-auth-token/dev-status.svg?theme=shields.io)](https://david-dm.org/hipush/spn-auth-token#info=devDependencies)

Encoding and decoding authentication token of Safari Push Notifications.

## Install

```
npm install spn-auth-token
```

## Usage

```js
var spnAuthToken = require('spn-auth-token');

spnAuthToken.crypt({id: 'my-id'}, 'salt')
.then(function (token) {
  console.log(token); // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIifQ.e9wZgUdux3Bp-QVGjhEBpuS65hU4zcr1uzCMJyPwsg0
});

spnAuthToken.decrypt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIifQ.e9wZgUdux3Bp-QVGjhEBpuS65hU4zcr1uzCMJyPwsg0', 'salt')
.then(function (payload) {
  console.log(payload); // {id: 'my-id'}
});
```

### spnAuthToken.encode(payload, secret)

Generate an authentication token from a payload.

### spnAuthToken.decode(token, secret)

Decode an authentication token.

## License

MIT
