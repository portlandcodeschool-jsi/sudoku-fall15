var DigitSet = require('./digitset');


function Grid(initstr) {
	this.cells = [];
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
       this.cells.push(new DigitSet(e));
     } else {
       this.cells.push(new DigitSet());
     }
	 }, this)
	}
};

Grid.prototype.cells = function () {
  return this.cells.slice();
};

Grid.prototype.getRow = function (cellToken) {
  var row = [Math.floor(cellToken / 9)];
  var cellIds = [];
  var digitSets = [];

  for (var i = 0; i < 9; i++){
    cellIds.push(row * 9 + i);
  }
  cellIds.forEach(function(e){
    digitSets.push(this.cells[e]);
  }, this);
  return digitSets;
};

Grid.prototype.getCol = function (cellToken) {
  var col = cellToken % 9;
  var cellIds = [];
  var digitSets = [];

  for (var i = 0; i < 9; i++){
    cellIds.push(col + 9 * i);
  }
  cellIds.forEach(function(e){
    digitSets.push(this.cells[e]);
  }, this);
  return digitSets;
};



var myGrid = new Grid(".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8");

// console.log(myGrid);// for testing only
// console.log(myGrid.getRow(0));
// console.log(myGrid.getRow(8));
// console.log(myGrid.getRow(9));
// console.log(myGrid.getRow(18));
myGrid.getCol(1);
module.exports = Grid;
