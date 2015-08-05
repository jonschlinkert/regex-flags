'use strict';

/* deps: mocha */
var should = require('should');
var regexFlags = require('./');

describe('regexFlags', function () {
  it('should return the flags from the given regex:', function () {
    regexFlags(/foo/).should.equal('');
    regexFlags(/foo/g).should.equal('g');
    regexFlags(/foo/m).should.equal('m');
    regexFlags(/foo/i).should.equal('i');
    regexFlags(/foo/gm).should.equal('gm');
    regexFlags(/foo/gi).should.equal('gi');
    regexFlags(/foo/img).should.equal('gim');
    regexFlags(/foo/gim).should.equal('gim');
    regexFlags(/foo/gim).should.equal('gim');

    regexFlags(/foo/).should.not.equal('foo');
    regexFlags(/foo/g).should.not.equal('bar');
    regexFlags(/foo/m).should.not.equal('baz');
    regexFlags(/foo/i).should.not.equal('g');
    regexFlags(/foo/gm).should.not.equal('g');
    regexFlags(/foo/gi).should.not.equal('gim');
    regexFlags(/foo/gmi).should.not.equal('gi');
  });

  it('should throw an error when a non-regex is passed:', function () {
    (function () {
      regexFlags();
    }).should.throw('expected a regular expression.');

    (function () {
      regexFlags([]);
    }).should.throw('expected a regular expression.');

    (function () {
      regexFlags('');
    }).should.throw('expected a regular expression.');

    (function () {
      regexFlags(null);
    }).should.throw('expected a regular expression.');

    (function () {
      regexFlags({});
    }).should.throw('expected a regular expression.');
  });
});
