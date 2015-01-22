var expect = require('chai').expect;
var sfpAuthToken = require('./index');
var randomstring = require('randomstring');

describe('Sfp auth token', function () {
  it('should crypt and decrypt a plain text', function () {
    var crypted = sfpAuthToken.crypt('my text', 'my key');
    var decrypted = sfpAuthToken.decrypt(crypted, 'my key');
    expect(decrypted).to.equal('my text');
  });

  it('should have a minimal char length of 15', function () {
    function randomNum(size) {
      return Math.ceil(Math.random() * size);
    }

    function cryptRandom() {
      return sfpAuthToken.crypt(
        randomstring.generate(randomNum(10)),
        randomstring.generate(randomNum(10))
      );
    }

    for (var i = 0; i < 1000; i++) {
      var crypted = cryptRandom();
      expect(crypted.length).to.be.least(15);
    }
  });
});
