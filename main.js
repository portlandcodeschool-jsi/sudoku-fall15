var GridFactory = require('./grid_constructor');
var Viewer = require('./viewer-display.js');
var ObjectFactory = require('./digitSet_Constructor');
var currentStr = require('./updater.js');

var testStr = '7...2......9.3....4.8..1..7.......8....627..5....45..95.3..4.....2...6......7.9.8';
var cellSet = [];

//function that changes value of currentStr;
var changeCellValue = function(newStr) {
  currentStr = newStr;
};


var viewer = new Viewer(testStr);
console.log(viewer);


module.exports = testStr;
