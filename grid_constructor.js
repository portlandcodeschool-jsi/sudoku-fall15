var DigitSet = require('./digitset');
var ObjectFactory = require('./DigitSet_Constructor.js');
var TestStrGenerator = require('./data_into_testString.js');

var cellSet = [];

var GridFactory = function(testStrGenerator) {
		for (var id = 0; id < 81; id ++ ) {
			cellSet[id] = new ObjectFactory(id);
		}
		// this.givenValue =
};

// GridFactory();
// console.log(cellSet);
//
// var cell = new ObjectFactory(14);
// console.log(cell.block);



console.log(ObjectFactory);// for testing only

module.exports = GridFactory;
