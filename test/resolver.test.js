/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../app/resolver');


describe('realms/resolver', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal(undefined);
    expect(factory['@singleton']).to.equal(undefined);
  });
  
});
