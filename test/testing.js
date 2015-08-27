var Grid = require('../grid.js');
var expect = require('chai').expect;


describe('digitsets testing', function() {

  // Eliminate
  describe('Test the eliminate method of a digitset', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    before(function() {
      game.digitsets[3].eliminate("7");
    });

    it('Should return -1', function() {
      console.log(game.digitsets[3].possibilities)
      expect(game.digitsets[3].possibilities.indexOf("7")).to.equal(-1);
    });

    it('Should return 8', function() {
      expect(game.digitsets[3].possibilities.length).to.equal(8);
    });
  });


  // Size
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


  // toString
  describe('Test the toString() method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return string', function() {
      expect(game.digitsets[0].toString()).to.be.a("string");
    });
  });


  // toArray
  describe('Test the toArray() method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return array', function() {
      expect(game.digitsets[0].toArray()).to.be.a("array");
    });
  });
});



describe('Grid testing', function() {

  // getRow
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


  // toString
  describe('Test toString Method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return tstStr', function() {
      expect(game.toString()).to.equal('158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413');
    });
  });
});
