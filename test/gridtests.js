var Grid = require('../grid.js');
var DigitSet = require('../digitset.js');
var chai = require('chai');
var expect = chai.expect;
var grid;

describe('Testing Grid', function() {
  before(function() {
    grid = new Grid('123456789456789123789123456234567891567891234891234567345678912678912345912345678');
    describe('grid.cells()', function() {
      var cells = grid.cells();
      it('should return an array with 81 members', function(){
        expect(cells.length).to.equal(81);
      });
      it('should have 80 at index 80', function(){
        expect(cells[80]).to.equal(80);
      });
    });
    describe('grid.cells(["c", 0])', function() {
      it('its array should have 9 members', function(){
        expect(grid.cells(["c", 0]).length).to.equal(9);
      });
      it('should have 72 as its last member', function(){
        expect(grid.cells(["c", 0])[8]).to.equal(72);
      })
      it('should have 0 as its first member', function(){
        expect(grid.cells(["c", 0])[0]).to.equal(0);
      })
    });
    describe('grid.cells(["r", 5])', function() {
      it('its array should have 9 members', function(){
        expect(grid.cells(["r", 5]).length).to.equal(9);
      });
      it('should have 49 as its fifth member', function(){
        expect(grid.cells(["r", 5])[4]).to.equal(49);
      })
      it('should have 45 as its first member', function(){
        expect(grid.cells(["r", 5])[0]).to.equal(45);
      })
    });
    describe('grid.cells(["b", 0])', function() {
      it('its array should have 9 members', function(){
        expect(grid.cells(["b", 0]).length).to.equal(9);
      });
      it('should have 0 as its first member', function(){
        expect(grid.cells(["b", 0])[0]).to.equal(0);
      })
      it('should have 10 as its fifth member', function(){
        expect(grid.cells(["b", 0])[4]).to.equal(10);
      })
      it('should have 20 as its last member', function(){
        expect(grid.cells(["b", 0])[8]).to.equal(20);
      })
    });
  });
  describe('grid.getRow()', function() {

    it('getRow(0) should return 0', function() {
      expect(grid.getRow(0)).to.equal(0);
    });
    it('getRow(37) should return row 4', function() {
      expect(grid.getRow(37)).to.equal(4);
    });
    it('getRow(99) should return NaN', function() {
      expect(Number.isNaN(grid.getRow(99))).to.be.true;
    });
    it('getRow("") should return NaN', function() {
      expect(Number.isNaN(grid.getRow(''))).to.be.true;
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
      expect(Number.isNaN(grid.getCol(99))).to.be.true;
    });
    it('getCol("") should return NaN', function() {
      expect(Number.isNaN(grid.getCol(''))).to.be.true;
    });
  });
  describe('grid.getAllDigitSets()', function() {

    it('cells() should return an Array', function() {
      expect(grid.getAllDigitSets()).to.be.an.instanceof(Array);
    });
    it('That has 81 members', function() {
      expect(grid.getAllDigitSets().length).to.equal(81);
    });
    it('First digitset should contain 1', function() {
      expect(grid.getAllDigitSets()[0]).to.deep.equal(new DigitSet('1'));
    });
  });
});
