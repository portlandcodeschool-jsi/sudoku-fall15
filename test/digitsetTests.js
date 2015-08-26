var DigitSet = require('../digitset.js');
var chai = require('chai');
var expect = chai.expect;
var digitset;

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
});
