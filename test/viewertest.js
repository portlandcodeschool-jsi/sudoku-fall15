var Grid = require('../grid.js');
var DigitSet = require('../digitset.js');
var Viewer = require('../viewer.js');
var chai = require('chai');
var expect = chai.expect;
var grid;
var viewer;

describe('Testing Viewer', function() {
    before(function() {
      grid = new Grid('158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413');
      viewer = new Viewer(grid);
    });

  describe('viewer.drawSelf', function() {
    it('should draw a sudoku board with given possibles', function() {
      expect(viewer.drawSelf()).to.equal('+---------+---------+---------+\n| 1  5  8 | .  2  . | .  6  . |\n| 2  .  . | .  8  . | .  9  . |\n| .  3  . | .  7  . | 8  .  2 |\n+---------+---------+---------+\n| .  6  . | 7  4  . | .  .  . |\n| .  .  4 | .  6  . | 7  .  . |\n| .  .  . | .  1  9 | .  5  . |\n+---------+---------+---------+\n| 4  .  9 | .  3  . | .  2  . |\n| .  2  . | .  5  . | .  .  8 |\n| .  7  . | .  9  . | 4  1  3 |\n+---------+---------+---------+\n');
    });
    it('should return a board now containing a star where the hint should be', function() {
      expect(viewer.showHint(3)).to.equal('+---------+---------+---------+\n| 1  5  8 | *  2  . | .  6  . |\n| 2  .  . | .  8  . | .  9  . |\n| .  3  . | .  7  . | 8  .  2 |\n+---------+---------+---------+\n| .  6  . | 7  4  . | .  .  . |\n| .  .  4 | .  6  . | 7  .  . |\n| .  .  . | .  1  9 | .  5  . |\n+---------+---------+---------+\n| 4  .  9 | .  3  . | .  2  . |\n| .  2  . | .  5  . | .  .  8 |\n| .  7  . | .  9  . | 4  1  3 |\n+---------+---------+---------+\n\n\n\n* Could be:1,2,3,4,5,6,7,8,9');
    });
    it('return a snapshot of the board at a given iteration', function() {
      viewer.snapshot();
      expect(viewer.album[0]).to.equal('+---------+---------+---------+\n| 1  5  8 | .  2  . | .  6  . |\n| 2  .  . | .  8  . | .  9  . |\n| .  3  . | .  7  . | 8  .  2 |\n+---------+---------+---------+\n| .  6  . | 7  4  . | .  .  . |\n| .  .  4 | .  6  . | 7  .  . |\n| .  .  . | .  1  9 | .  5  . |\n+---------+---------+---------+\n| 4  .  9 | .  3  . | .  2  . |\n| .  2  . | .  5  . | .  .  8 |\n| .  7  . | .  9  . | 4  1  3 |\n+---------+---------+---------+\n');
    });
  });
});
