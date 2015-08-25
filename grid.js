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
		 this.cells.push(new DigitSet(e));
	 })
	}
};

Grid.prototype.cells = function () {
  return this.cells.slice();
};

Group.prototype.getRow = function (cellToken) {
	var row = [Math.floor(cellToken / 9)];
	var cellIds = [];
	var digitSets = [];

	for (var i = 0; i < 9; i++){
    cellIds.push(row * 9 + i);
	}
	cellIds.forEach(function(e){
		digitSets.push(this.cells[e]);
	});
	return digitSets;
};

var myGrid = Grid()

console.log(Grid);// for testing only

module.exports = Grid;
