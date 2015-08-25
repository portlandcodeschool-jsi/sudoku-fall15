var DigitSet = require('./digitset');


function Grid(initstr) {
	var self = this;
	var strArray = initstr.split('');
	this.digitsets = [];
	function initDigitSets( element , index , array ) {
  	var x = new DigitSet(element);
  	self.digitsets.push(x);
	}
	strArray.forEach(initDigitSets);
}

console.log(Grid);// for testing only

module.exports = Grid;
