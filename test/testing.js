var Grid = require('../grid.js');
var expect = require('chai').expect;
var Viewer = require('../viewer.js');

//Hello - it's 12:13PM - I'm Pat
describe('digitsets testing', function() {

  // Eliminate
  describe('Test the eliminate method of a digitset', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    before(function() {
      game.digitsets[3].eliminate("7");
    });

    it('Should return -1', function() {
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

  // getRow and getCol
  describe('Test getRow Method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return 1.', function() {
      expect(game.getRow(15)).to.equal('R1');
    });

    it('Should return 4.', function() {
      expect(game.getRow(36)).to.equal('R4');
    });

    it('Should return 8.', function() {
      expect(game.getRow(77)).to.equal('R8');
    });

    it('Should return 6.', function() {
      expect(game.getCol(15)).to.equal('C6');
    });

    it('Should return 4.', function() {
      expect(game.getCol(49)).to.equal('C4');
    });

    it('Should return 5.', function() {
      expect(game.getCol(68)).to.equal('C5');
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

  // getPossible
  describe('Test getPossible Method', function() {
    var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
    var game = new Grid(testStr);

    it('Should return ["1"]', function() {
      expect(game.getPossible(0)).to.deep.equal(['1']);
    });

    it('Should return ["1", "2", "3", "4", "5", "6", "7", "8", "9"]', function() {
      expect(game.getPossible(3)).to.deep.equal(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    });

  });


  // groups
  describe('Test groups Method', function() {
  	var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
  	var game = new Grid(testStr);

  	it('Should return ["R1", "C6", "B2"]', function() {
  		expect(game.groups(15)).to.deep.equal(["R1", "C6", "B2"]);
  	});

  	it('Should return ["R0", ..., "R8", "C0", ..., "C8", "B0", ..., "B8"]', function() {
  		expect(game.groups()).to.deep.equal(["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]);
  	});
  });


  // cells
  describe('Test cells Method', function() {
  	var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
  	var game = new Grid(testStr);

  	it('Should return [18, 19, 20, 21, 22, 23, 24, 25, 26]', function() {
  		expect(game.cells("R2")).to.deep.equal([18, 19, 20, 21, 22, 23, 24, 25, 26]);
  	});

  	it('Should return [4, 13, 22, 31, 40, 49, 58, 67, 76]', function() {
  		expect(game.cells("C4")).to.deep.equal([4, 13, 22, 31, 40, 49, 58, 67, 76]);
  	});

  	it('Should return [54, 55, 56, 63, 64, 65, 72, 73, 74]', function() {
  		expect(game.cells("B6")).to.deep.equal([54, 55, 56, 63, 64, 65, 72, 73, 74]);
  	});

  	it('Should return [0, ..., 80]', function() {
  		expect(game.cells()).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
  	});
  });


  // setPossible
  describe('Test setPossible Method', function() {
  	var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
  	var game = new Grid(testStr);

  	before(function() {
  		game.setPossible(3, [3, 4, 9]);
  	});

  	it('Should update possibilities array to be [3, 4, 9]', function() {
  		expect(game.digitsets[3]).to.deep.equal([3, 4, 9]);
  	});
  });
});



//testView
describe ('Test viewer Methods', function(){
  var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
  var game = new Grid(testStr);
  var viewer = new Viewer(game);
  var testBoard =
"+---------+---------+---------+\n" +
"| 1  5  8 | .  2  . | .  6  . |\n" +
"| 2  .  . | .  8  . | .  9  . |\n" +
"| .  3  . | .  7  . | 8  .  2 |\n" +
"+---------+---------+---------+\n" +
"| .  6  . | 7  4  . | .  .  . |\n" +
"| .  .  4 | .  6  . | 7  .  . |\n" +
"| .  .  . | .  1  9 | .  5  . |\n" +
"+---------+---------+---------+\n" +
"| 4  .  9 | .  3  . | .  2  . |\n" +
"| .  2  . | .  5  . | .  .  8 |\n" +
"| .  7  . | .  9  . | 4  1  3 |\n" +
"+---------+---------+---------+\n";



it('Should return testBoard', function(){
expect(viewer.showCertain()).to.equal(testBoard);
});
});
