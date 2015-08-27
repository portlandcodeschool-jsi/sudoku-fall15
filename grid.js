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

	this.rowTokens = ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"];

	this.colTokens = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"];

	this.blockTokens = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"];

	this.groupTokens = ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"];

	this.cellTokens = [“0“, “1“, “2“, “3“, “4“, “5“, “6“, “7“, “8“, “9“, “10“, “11“, “12“, “13“, “14“, “15“, “16“, “17“, “18“, “19“, “20“, “21“, “22“, “23“, “24“, “25“, “26“, “27“, “28“, “29“, “30“, “31“, “32“, “33“, “34“, “35“, “36“, “37“, “38“, “39“, “40“, “41“, “42“, “43“, “44“, “45“, “46“, “47“, “48“, “49“, “50“, “51“, “52“, “53“, “54“, “55“, “56“, “57“, “58“, “59“, “60“, “61“, “62“, “63“, “64“, “65“, “66“, “67“, “68“, “69“, “70“, “71“, “72“, “73“, “74“, “75“, “76“, “77“, “78“, “79“, “80“];

	this.getRow = function(cellToken) {
		//If method has been passed no arguments, it will return all of the Rows on the Grid

		if(arguments.length < 1) {
			return this.rowTokens;
		} else {
				return "R" + Math.floor(cellToken/9);
		};
	};

	this.getCol = function(cellToken) {
		//If method has been passed no arguments, it will return all of the Columns on the Grid

		if(arguments.length < 1) {
			return this.colTokens;
		} else {
				return "C" + cellToken%9;
		};
	};

	this.getBlock = function(cellToken) {
		//If method has been passed no arguments, it will return all of the Blocks on the Grid

		if(arguments.length < 1) {
			return this.blockTokens;
		} else {
			return "B" + (3*Math.floor(Math.floor(cellToken/9)/3)+Math.floor(cellToken%9/3));
		};
	};

	this.groups = function(cellToken) {
		//This will return an array of the rowToken, columnToken, and blockToken associated with the given cellToken.
		//If no cellToken argument is passed into the function, all group tokens will be returned.

		if(arguments.length < 1) {
			return this.groupTokens;
		} else {
			return [this.getRow(cellToken), this.getCol(cellToken), this.getBlock(cellToken)];
		}
	};

	this.cells = function(groupToken) {
		//This will return an array of cell tokens associated with the given groupToken.
		//If no groupToken argument is passed into the function, all cell tokens will be returned.

		if(arguments.length < 1) {
			return this.cellTokens;
		} else {
			var groupType = groupToken[0];
			var Tokens = [];

			for (var i = 0; i <= 80; i++) {
				switch(groupType) {
					case "R":
						if(this.getRow(i) === groupToken) {Tokens.push(i);}

					case "C":
						if(this.getCol(i) === groupToken) {Tokens.push(i);}

					case "B":
						if(this.getBlock(i) === groupToken) {Tokens.push(i);}

					default:
						// Not sure that this is needed. Regardless, unsure how it would be used (if it were needed).
				}
			}

			return Tokens;
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
