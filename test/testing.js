var Grid = require('../grid.js');
var expect = require('chai').expect;



describe('digitsets testing', function() {

//Remove
  describe('Test the removePossibleValue method of a digitset', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    before(function() {
      game.digitsets[3].removePossibleValue("7");
    });

    it('Should return -1', function() {
      console.log(game.digitsets[3].possibilities)
      expect(game.digitsets[3].possibilities.indexOf("7")).to.equal(-1);
    });

    it('Should return 8', function() {
      expect(game.digitsets[3].possibilities.length).to.equal(8);
    });
  });


//Size
  describe('Test the .size() method of a digitset instance', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return true', function() {
      expect(game.digitsets[0].size()).to.be.a("number");
    });

    it('Should return 1', function() {
      expect(game.digitsets[0].size()).to.equal(1);
    });

    it('Should return 9', function() {
      console.log("I'm an array with 9 items!" + game.digitsets[3].possibilities);
      expect(game.digitsets[3].size()).to.equal(9);
    });
  });



//AsString
  describe('Test the possibilitiesAsString() method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return string', function() {
      expect(game.digitsets[0].possibilitiesAsString()).to.be.a("string");
    });
  });


//AsArray
  describe('Test the possibilitiesAsArray() method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return array', function() {
      expect(game.digitsets[0].possibilitiesAsArray()).to.be.a("array");
    });
  });
});










//Grid Tests
describe('Test getRow Method', function() {
  var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
  var game = new Grid(testStr);

  it('', function() {
    expect(game.getRow(15)).to.equal(1);
  });

  it('', function() {
    expect(game.getRow(36)).to.equal(4);
  });

  it('', function() {
    expect(game.getRow(77)).to.equal(8);
  });

  it('', function() {
    expect(game.getColumn(15)).to.equal(6);
  });

  it('', function() {
    expect(game.getColumn(49)).to.equal(4);
  });

  it('', function() {
    expect(game.getColumn(68)).to.equal(5);
  });

});
