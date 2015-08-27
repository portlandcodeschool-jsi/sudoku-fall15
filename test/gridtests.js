var Grid = require('../grid.js');
var DigitSet = require('../digitset.js');
var chai = require('chai');
var expect = chai.expect;
var grid;

describe('Testing Grid', function() {
    before(function() {
      grid = new Grid('123456789456789123789123456234567891567891234891234567345678912678912345912345678');

    });
  describe('grid.getRow()', function() {

    it('getRow(0) should return 0', function() {
      expect(grid.getRow(0)).to.equal(0);
    });
    it('getRow(37) should return row 4', function() {
      expect(grid.getRow(37)).to.equal(4);
    });
    it('getRow(99) should return NaN', function() {
      expect(grid.getRow(99)).to.equal(NaN);
    });
    it('getRow("") should return NaN', function() {
      expect(grid.getRow('')).to.equal(NaN);
    });
  });
  describe('grid.getCol()', function() {

    it('getCol(0) should return 0', function() {
      expect(grid.getCol(0)).to.equal(0);
    });
    it('getCol(37) should return row 4', function() {
      expect(grid.getCol(37)).to.equal(1);
  });
    it('getCol(99) should return NaN', function() {
      expect(grid.getCol(99)).to.equal(NaN);
    });
    it('getCol("") should return NaN', function() {
      expect(grid.getCol('')).to.equal(NaN);
    });
  });
  describe('grid.cells()', function() {

    it('cells() should return an Array', function() {
      expect(grid.cells()).to.be.an.instanceof(Array);
    });
    it('That has 81 members', function() {
      expect(grid.cells().length).to.equal(81);
    });
    it('First digitset should contain 1', function() {
      expect(grid.cells()[0]).to.deep.equal(new DigitSet('1'));
    });
  });
});

describe('Testing Grid', function() {
    before(function() {
      grid = new Grid('123456789456789123789123456234567891567891234891234567345678912678912345912345678');

    });

  describe('grid.toString()', function() {
    it('should return the entire grid as a string ', function() {
      grid = new Grid('5...68..........6..42.5.......8..9....1....4.9.3...62.7....1..9..42....3.8.......');
      expect(grid.toString()).to.equal('5...68..........6..42.5.......8..9....1....4.9.3...62.7....1..9..42....3.8.......');
    });
    it('setting a number to a certain digitset', function() {
      grid.allCells[1].set(['9']);
      expect(grid.toString()).to.equal('59..68..........6..42.5.......8..9....1....4.9.3...62.7....1..9..42....3.8.......');
    });
    it('making a failed test', function() {
    grid.fromString('59..68..........6..42.5...4...8..9....16...4.9.3...62.7....1..9..42....3.8.......');
    expect(grid.toString()).to.equal('59..68..........6..42.5...4...8..9....16...4.9.3...62.7....1..9..42....3.8.......');
    });
  });
});
