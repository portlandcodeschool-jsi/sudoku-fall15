var Grid = require('./grid.js');
var GridFactory = require('./grid_constructor.js');
var Viewer = require('./viewer.js');
var ObjectFactory = require('./DigitSet_Constructor.js');
var emptyArray = require('./data_into_testString.js');
var updater = require('./updater.js');

var testStr = '7..........9.3....4.8..1..7.......8....627..5....45..95.3..4.....2...6......7.9.8';
// consider loading strings from file instead...
var currentStr = testStr;
//function that changes value of currentStr;
var changeCellValue = function(newStr) {
  currentStr = newStr;
};

var game = new GridFactory(currentStr);

var viewer = new Viewer(currentStr);
viewer.show();

module.exports = currentStr;
var newStr = updater("7..........9.3....4.8..1..7.......8....627..5....45..95.3..4.....2...6......7.9.8", 2, 1);

console.log(newStr);
