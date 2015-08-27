var testStr = require('./main');
var Viewer = require('./viewer-display');
var ObjectFactory = require('./digitSet_Constructor');
var currentStr = require('./updater');


var cellSet = [];
var newStr = testStr;
var GridFactory = function() {

		for (var id = 0; id < 81; id ++ ) {
			cellSet[id] = new ObjectFactory(id);
		}
};



module.exports = GridFactory;
