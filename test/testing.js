var Grid = require('../grid.js');
var expect = require('chai').expect;

var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
var game = new Grid(testStr);

describe('digitsets testing', function() {
  describe('Test the removePossibleValue method of a digitset', function() {

    before(function() {
      game.digitsets[3].removePossibleValue("7");
    });

    it('Should return -1', function() {
      expect(game.digitsets[3].posssibilities.indexOf("7")).to.equal(-1);
    });

    it('Should return 8', function() {
      expect(game.digitsets[3].posssibilities.length).to.equal(8);
    });
  });

  describe('Test the .size() method of a digitset instance', function() {

    it('Should return true', function() {
      expect(game.digitsets[0].size()).to.be.a("number");
    });

    it('Should return 1', function() {
      expect(game.digitsets[0].size()).to.equal(1);
    });

    it('Should return 9', function() {
      expect(game.digitsets[3].size()).to.equal(9);
    });

});





});
