var crypto = require('crypto');

exports.crypt = crypt;
exports.decrypt = decrypt;

/**
 * Create auth token from a plain string and a key.
 *
 * @param {string} plain Plain text
 * @param {string} key Encryption key
 */

function crypt(plain, key) {
  var cipher = crypto.createCipher('aes-256-cbc', key);
  cipher.update(plain, 'utf8', 'base64');
  return cipher.final('base64');
}

/**
 * Decrypt the token using the key;
 *
 * @param {string} token Token
 * @param {string} key Encryption key
 */

function decrypt(token, key) {
  var decipher = crypto.createDecipher('aes-256-cbc', key);
  decipher.update(token, 'base64', 'utf8');
  return decipher.final('utf8');
}
