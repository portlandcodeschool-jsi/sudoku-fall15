var DigitSet = require('./digitset');
var _ = require('lodash');

function validateCellToken(cellToken) {
  if (typeof(cellToken) !== "number" || cellToken < 0 || cellToken > 80) {
    return false;
  }
  return true;
}

function Grid(initstr) {
	this.allCells = [];
	if (arguments.length > 0){
	 var values = initstr.split("");
	 values = values.map(function(e){
		 if (e === "."){
			 return null;
		 } else{
			 return e;
		 }
	 });
	 values.forEach(function(e){
     if (e !== null) {
       this.allCells.push(new DigitSet(e));
     } else {
       this.allCells.push(new DigitSet());
     }
 	}, this);
	}
}

/*
  TODO return array of all cell tokens, not an array of all the DigitSets
*/
Grid.prototype.cells = function (groupToken) {
  var cellTokens = [];
  if (arguments.length === 0) {
    for (var i = 0; i < 81; i++) {
      cellTokens.push(i);
    }
  } else {
    // return array of cellTokens associated with groupToken
    // groupToken is a two-member array: ['c', 8]
    var groupType = groupToken[0]; // will be 'c' 'r' or 'b'
    var groupNumber = groupToken[1]; // will be 0 ... 8
    if (groupType === "c") {
      for (var i = 0; i < 9; i++) {
        cellTokens.push(groupNumber + i * 9);
      }
    } else if (groupType === "r") {
      for (var i = 0; i < 9; i++) {
        cellTokens.push(groupNumber * 9 + i);
      }
    } else {
      var startingRow = Math.floor(groupNumber / 3) * 3;
      var startingCol = (groupNumber % 3) * 3;
      var topLeftSquare = startingRow * 9 + startingCol;
      for (var i = 0; i < 9; i++){
        cellTokens.push(9 * Math.floor(i / 3) + (i % 3) + topLeftSquare);
      }
    }
  }
  return cellTokens;
};

Grid.prototype.getAllDigitSets = function () {
  return this.allCells.slice();
};

Grid.prototype.getCell = function (id) {
  return this.allCells[id];
};

Grid.prototype.getRow = function (cellToken) {
  return validateCellToken(cellToken) ? Math.floor(cellToken / 9) : NaN;
};

Grid.prototype.getCol = function (cellToken) {
  return validateCellToken(cellToken) ? Math.floor(cellToken % 9) : NaN;
};

Grid.prototype.getBlock = function (cellToken) {
  return validateCellToken(cellToken) ?
    (Math.floor(this.getRow(cellToken) / 3) * 3) + (Math.floor(this.getCol(cellToken) / 3)) :
    NaN;
};

Grid.prototype.getDigitSetsForRow = function (cellToken) {
  var row = this.getRow(cellToken);
  var col = this.getCol(cellToken);
  var cellIds = [];
  var digitSets = [];

  for (var i = 0; i < 9; i++){
    if (i === col) continue;
    cellIds.push(row * 9 + i);
  }
  cellIds.forEach(function(e){
    digitSets.push(this.allCells[e]);
  }, this);
  return digitSets;
};

Grid.prototype.getDigitSetsForCol = function (cellToken) {
  var col = this.getCol(cellToken);
  var row = this.getRow(cellToken)
  var cellIds = [];
  var digitSets = [];

  for (var i = 0; i < 9; i++){
    if (i === row) continue;
    cellIds.push(col + 9 * i);
  }
  cellIds.forEach(function(e){
    digitSets.push(this.allCells[e]);
  }, this);
  return digitSets;
};

Grid.prototype.getDigitSetsForBlock = function (cellToken) {
  var col = this.getCol(cellToken);
  var row = this.getRow(cellToken);
  // var idInThisBlock = (row - Math.floor(row / 3)) * 3 + (col - Math.floor(col / 3));
  var idInThisBlock = ((row - Math.floor(row / 3) * 3) * 3) + (col - Math.floor(col / 3) * 3);
  col = Math.floor(col / 3) * 3;
  row = Math.floor(row / 3) * 3;
  var topLeftSquare = row * 9 + col;
  var cellIds = [];
  var digitSets = [];
  for (var i = 0; i < 9; i++){
    if (i === idInThisBlock) continue;
    cellIds.push(9 * Math.floor(i / 3) + (i % 3) + topLeftSquare);
  }
  cellIds.forEach(function(e){
    digitSets.push(this.allCells[e]);
  }, this);
  return digitSets;
};

Grid.prototype.getNeighborhood = function (cellToken) {
  // will return a single digit set with all know numbers in this neighborhood
  // get all the digitsets in the col, in the row, and block
  var newDigitSet = new DigitSet(-1);
  var allDigitSets = _.union(this.getDigitSetsForCol(cellToken), this.getDigitSetsForRow(cellToken), this.getDigitSetsForBlock(cellToken));
  // console.log(allDigitSets);
  allDigitSets.forEach(function (e) {
    if (e.isUncertain() === false) {
      newDigitSet.add(e.toArray());
    }
  })
  return newDigitSet;
};

Grid.prototype.remainingArray = function () {
  // look at every cell, build array of all uncertain cells, and return length of that array
  var uncertainCells = [];
  this.allCells.forEach(function(e) {
    if (e.isUncertain()) {
      uncertainCells.push(e)
    }
  })
  return uncertainCells;
}

Grid.prototype.remaining = function () {
  return this.remainingArray().length;
}


Grid.prototype.save = function () {
	return this.allCells.slice();
};

Grid.prototype.restore = function (state) {
  this.allCells = state.slice();
};

Grid.prototype.toString = function () {
	var string = "";
    this.allCells.forEach(function(e){
			if(e.isUncertain()){
				string += ".";
			}else{
				string += e.toString();
			}
		});
		return string;
};


Grid.prototype.fromString = function (initstr) {
	this.allCells = [];
	var values = initstr.split("");
	values = values.map(function(e){
		if (e === "."){
			return null;
		} else{
			return e;
		}
	});
	values.forEach(function(e){
		if (e !== null) {
			this.allCells.push(new DigitSet(e));
		} else {
			this.allCells.push(new DigitSet());
		}
	}, this);
};




var myGrid = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");
// myGrid = new Grid("123456789456789123789123456234567891567891234891234567345678912678912345912345678");

// console.log(myGrid.getDigitSetsForBlock(3));
// console.log(myGrid.getDigitSetsForBlock(40));
// // console.log(myGrid.getNeighborhood(40));
// console.log(myGrid.remaining());
// console.log();
// // var thisCell = myGrid.remainingArray()[7];
// // var thisCellsAbsID = myGrid.getAllDigitSets.indexOf(thisCell);
// console.log(thisCellsAbsID);
// console.log();




// console.log(myGrid);// for testing only
// console.log(myGrid.getRow(0));
// console.log(myGrid.getRow(8));
// console.log(myGrid.getRow(9));
// console.log(myGrid.getRow(18));
// myGrid.getDigitSetsForBlock(23);
// console.log(myGrid.getCells());
myGrid.getDigitSetsForBlock(23);
// console.log(myGrid.getAllDigitSets());
module.exports = Grid;
console.log(validateCellToken(10));