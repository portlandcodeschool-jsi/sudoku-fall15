var Grid = require('./grid.js');
var Viewer = require('./viewer.js');

var testStr = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';
// consider loading strings from file instead...

var game = new Grid(testStr);

var viewer = new Viewer(game);
viewer.show();

console.log(game.digitsets);
