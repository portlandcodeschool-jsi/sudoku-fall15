var Grid = require('./grid.js');
var GridFactory = require('./grid_constructor.js');
var Viewer = require('./viewer.js');
var ObjectFactory = require('./DigitSet_Constructor.js');
var TestStrGenerator = require('./data_into_testString.js');


var testStr = TestStrGenerator;
// consider loading strings from file instead...

var game = new GridFactory(testStr);

var viewer = new Viewer(testStr);
viewer.show();
