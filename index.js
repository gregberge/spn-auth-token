var crypto = require('crypto');

exports.crypt = crypt;
exports.decrypt = decrypt;

function crypt(plain, key) {
  var cipher = crypto.createCipher('aes-256-cbc', key);
  cipher.update(plain, 'utf8', 'base64');
  return cipher.final('base64');
}

function decrypt(crypted, key) {
  var decipher = crypto.createDecipher('aes-256-cbc', key);
  decipher.update(crypted, 'base64', 'utf8');
  return decipher.final('utf8');
}
