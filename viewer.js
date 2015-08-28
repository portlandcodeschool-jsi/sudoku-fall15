// no need for grid module

function SudokuViewer(grid) {

	this.grid = grid;

	//show the certain digitsets
	this.showCertain = function() {

		var str = this.grid.toString();

		//////////////////Group Rows Into New Arrays
		var widenNumbers = function(element) {
		  return " " + element + " ";
		};
		var wideNumbers = str.split('').map(widenNumbers);
		var rowDigits = [[],[],[],[],[],[],[],[],[]];
		var makeRowsCallBack = function( element , index , array ) {
		  rowDigits[Math.floor(index/9)].push(element);
		};
		wideNumbers.forEach(makeRowsCallBack);

		//////////////////Concatinate Rows with Pipes
		var barsCallBack = function( element , index , array ) {
		  var str = "";
		  var addPipes = function( element , index , array ) {
		    if ( index%3 === 0) {
		      str += "|" + element;
		    } else {
		      str += element;
		    };
		  };
		  element.map(addPipes);
		  str += "|\n";
		  return str;
		};
		var rowBars = rowDigits.map(barsCallBack);

		//////////////////Make Board
		var board = "";
		var makeBoardCallBack = function(element , index , array) {
		  if (index%3 === 0) {
		    board +=  "+---------+---------+---------+\n" + element;
		  } else {
		    board += element;
		  }
		};
		rowBars.forEach(makeBoardCallBack);
		board += "+---------+---------+---------+\n";

		return board;

	};

	this.showPossible = function() {
		//This will show a 9x9 grid of the DigitSets with all Possibilites
	};

	this.showDebug = function() {
		//?
	};

	this.showHint = function(cellToken) {
		//Show the Possibilities of a particular DigitSet
		//This "cellHint" variable will hold the Array of Possibilities for the selected DigitSet
		var cellHint = this.grid.getPossible(cellToken);


		//console.log(cellHint);
		//console.log(cellHint.length);

		if (cellHint.length < 9) {


		var makeNumber = function( element , index , array ) {
		  //console.log(element);
		  return parseInt(element);
		};

		var cellHintInts = cellHint.map(makeNumber);

		//console.log(arr2);

		var dot = ".........";
		cellHint = dot.split('');
		//console.log(arr3);
		var placeNums = function( element , index , array ) {
		  cellHint[element-1] = element.toString();
		};
		cellHintInts.forEach(placeNums);
		//console.log(arr3);

		};




		//Add spaces on both sides of each element in the array
		var widenNumbers = function( element , index , array ) {
		  return " " + element + " ";
		};
		var wideVals = cellHint.map(widenNumbers);
		//console.log(wideVals);
		//Organize the wide numbers into groups of 3
		var rowDigits = [[],[],[]];
		//console.log(rowDigits);
		var makeRowsCallBack = function( element , index , array ) {
		  rowDigits[Math.floor(index/3)].push(element);
		};
		wideVals.forEach(makeRowsCallBack);
		//console.log(rowDigits);
		//Concatinate Rows with Pipes
		var barsCallBack = function( element , index , array ) {
			var str = "|";
		  str += element.join('');
		  str += "|\n";
			//console.log(str);
		  return str;
		};
		var rowBars = rowDigits.map(barsCallBack);
		//console.log(rowBars);
		var str = "+---------+\n";
		var awesomeCallback = function( element , index , array ) {
		  //console.log(element);
		  str += element;
		};
		rowBars.forEach(awesomeCallback);
		str += "+---------+\n";
		//console.log(str);
		return str;
	};

	this.snapshot = function() {
		//This will store a snapshot
		//It will call grid.toString() , and store that value
	};

	this.playback = function() {
		//This will replay all of the snapshots
	};

	this.startTimer = function() {
		//?
	};

};


SudokuViewer.prototype.show = function() {
	console.log('Sudoku appears here!');
}

console.log(SudokuViewer);// for testing only

module.exports = SudokuViewer;
