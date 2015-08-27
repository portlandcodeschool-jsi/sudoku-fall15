var DigitSet = require('../digitset.js');
var chai = require('chai');
var expect = chai.expect;

describe('Testing DigitSet', function() {
  describe('Testing Constructors', function() {
    it('should return a DigitSet', function(){
        expect(new DigitSet()).is.an.instanceof(DigitSet);
    });
    it('its possibles should be 1-9', function(){
        expect(new DigitSet().possibles).to.deep.equal(['1','2','3','4','5','6','7','8','9']);
    });
    it('should return a DigitSet', function(){
        expect(new DigitSet('1')).is.an.instanceof(DigitSet);
    });
    it('its possibles should be 1', function(){
        expect(new DigitSet('1').possibles).to.deep.equal(['1']);
    });
    it('should return a DigitSet', function(){
        expect(new DigitSet(['1','2','3'])).is.an.instanceof(DigitSet);
    });
    it('its possibles should be 1-3', function(){
        expect(new DigitSet(['1','2','3']).possibles).to.deep.equal(['1','2','3']);
    });
});

describe('Testing DigitSet Methods', function() {
    var digitset;
    before(function(){
        digitset = new DigitSet();
    });
    it('eliminate 9', function(){
        digitset.eliminate(['9']);
        expect(digitset.size()).to.equal(8);
        expect(digitset.toArray()).to.deep.equal(['1','2','3','4','5','6','7','8']);
    });
    it('eliminate 1, 2, Z', function(){
        digitset.eliminate(['1', '2', 'Z']);
        expect(digitset.size()).to.equal(6);
        expect(digitset.toArray()).to.deep.equal(['3','4','5','6','7','8']);
    });
    it('add 9', function(){
        digitset.add(['9']);
        expect(digitset.size()).to.equal(7);
        expect(digitset.toArray()).to.deep.equal(['3','4','5','6','7','8','9']);
    });
    it('add 1, 2, Z, 100', function(){
        digitset.add(['1', '2', 'Z', '100']);
        expect(digitset.size()).to.equal(9);
        expect(digitset.toArray()).to.deep.equal(['1','2','3','4','5','6','7','8','9']);
    });
    it('replaces the array of digits with new possibles', function(){
        digitset.set(['1','2','3']);
        expect(digitset.toArray()).to.deep.equal(['1','2','3']);
    });
    it('passing in a failed set', function(){
        digitset.set(['1','2','z', '-8']);
        expect(digitset.toArray()).to.deep.equal(['1','2']);
    });
    it('checks to see if there is more than one possbile', function(){
        expect(digitset.isUncertain()).to.be.true;
    });
    it('should return false if digitset has only one possible ', function(){
       digitset.eliminate(['1']);
       expect(digitset.isUncertain()).to.be.false;
    });
    it('should remove one DigitSet from another', function(){
      var ds1 = new DigitSet();
      var ds2 = new DigitSet(["1", "2", "3"]);
      ds1.subtract(ds2);
      expect(ds1.toArray()).to.deep.equal(new DigitSet(["4", "5", "6", "7", "8", "9"]).toArray());
    })
  });
});
