// no need for grid module

function SudokuViewer(grid) {

	this.showCertain() {

		//////////////////Group Rows Into New Arrays
		var widenNumbers = function(element) {
		  return " " + element + " ";
		};
		var wideNumbers = testStr.split('').map(widenNumbers);
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
		  str += "| \n";
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
		console.log(board);
		return board;
	};

	this.showPossible() {
		//This will show a 9x9 grid of the DigitSets with all Possibilites
	};

	this.showDebug() {
		//?
	};

	this.showHint(cellToken) {
		//Show the Possibilities of a particular DigitSet
	};

	this.snapshot() {
		//This will store a snapshot
		//It will call grid.toString() , and store that value
	};

	this.playback() {
		//This will replay all of the snapshots
	};

	this.startTimer() {
		//?
	};

};


SudokuViewer.prototype.show = function() {
	console.log('Sudoku appears here!');
}

console.log(SudokuViewer);// for testing only

module.exports = SudokuViewer;
