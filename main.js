var GridFactory = require('./grid_constructor');
var Viewer = require('./viewer-display');
var ObjectFactory = require('./digitSet_Constructor');
var currentStr = require('./updater');

var testStr = '7...2......9.3....4.8..1..7.......8....627..5....45..95.3..4.....2...6......7.9.8';
var cellSet = [];

//function that changes value of currentStr;
var changeCellValue = function(newStr) {
  currentStr = newStr;
};

//Display the string:
// Viewer(testStr);


//testing potential values
ObjectFactory();
var values = new ObjectFactory(1);
var old = values.getRow("1");
console.log(values.potential());


module.exports = testStr;
