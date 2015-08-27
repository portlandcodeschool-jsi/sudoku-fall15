var DigitSet = require('./digitset');

function Grid(initStr) {
	var self = this;
	var strArray = initStr.split("");
	this.digitsets = [];

	function initDigitSets(element, index, array) {
  	var x = new DigitSet(element);
  	self.digitsets.push(x);
	};

	strArray.forEach(initDigitSets);

	this.getRow = function(cellToken) {
		return Math.floor(cellToken/9);
	};

	this.getColumn = function(cellToken) {
		return cellToken%9;
	};

	this.getBlock = function(cellToken) {
		return 3*Math.floor(Math.floor(cellToken/9)/3)+Math.floor(cellToken%9/3);
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
