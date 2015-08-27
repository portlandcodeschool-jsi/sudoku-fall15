// no need for grid module

function SudokuViewer(grid) {

	this.showCertain() {
		//This will show a 9x9 grid of the Certain DigitSets
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
