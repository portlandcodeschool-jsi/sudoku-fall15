var DigitSet = require('./digitset');

function Grid(initString) {
	var self = this;
	var strArray = initString.split("");
	this.digitsets = [];

	function initDigitSets(element, index, array) {
  	var x = new DigitSet(element);
  	self.digitsets.push(x);
	};

	strArray.forEach(initDigitSets);

	this.getRow = function(cellToken) {
		if (arguments.length < 1){
			//Method has been passed no arguments
			//This will return all of the Rows on the Grid
		} else {
				return "R" + Math.floor(cellToken/9);
		};
	};

	this.getCol = function(cellToken) {
		if (arguments.length < 1) {
			//Method has been passed no arguments
			//This will return all of the Columns on the Grid
		} else {
				return "C" + cellToken%9;
		};
	};

	this.getBlock = function(cellToken) {
		if (arguments.length < 1){
			//Method has been passed no arguments
			//This will return all of the Blocks on the Grid
		} else {
			return "B" + (3*Math.floor(Math.floor(cellToken/9)/3)+Math.floor(cellToken%9/3));
		};
	};

	this.groups = function(cellToken) {
		//This will return an array of the rowToken, columnToken, and blockToken associated with the given cellToken
		return [this.getRow(cellToken), this.getCol(cellToken), this.getBlock(cellToken)];
	};

	this.cells = function(groupToken) {
		var groupType = groupToken[0];
		var cellTokens = [];

		for (var i = 0; i <= 80; i++) {
			switch(groupType) {
				case "R":
					if(this.getRow(i) === groupToken) {cellTokens.push(i);}

				case "C":
					if(this.getCol(i) === groupToken) {cellTokens.push(i);}

				case "B":
					if(this.getBlock(i) === groupToken) {cellTokens.push(i);}

				default:
					// Not sure that this is needed. Regardless, unsure how it would be used (if it were needed).
			}
		}
	};

	this.getPossible = function(cellToken) {
		//This will return the Possible Values of a Specific DigitSet
		return this.digitsets[cellToken].possibilities;
	};

	this.setPossible = function(cellToken , digitSet) {
		//This will Set the Possible Values of a Specific DigitSet
		this.digitsets[cellToken] = digitSet;
	};

	this.toString = function() {
		var callBack = function( element, index, array ) {
			if ( element.possibilities.length === 1 ) {
				return element.possibilities;
			} else {
				return "."
			}
		};
  	return self.digitsets.map(callBack).join('');;
	};
};

// console.log(Grid); // for testing only

module.exports = Grid;
