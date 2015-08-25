// sudoku data file is from:
// http://magictour.free.fr/msk_009

var fs = require('fs'); //load node module
var timer = require('./timer'); //load custom module

timer.start()
console.log('readFileSynch:')
var syncData = fs.readFileSync('sudoku-data', {encoding: 'utf8'});
timer.check('sync loading done');
console.log('-----------');



// Async, Right way:
var asyncData = '';
fs.readFile('sudoku-data', {encoding: 'utf8'}, function (err, data) {
	asyncData = data;
	console.log('Data:',asyncData.slice(0,80));
	timer.check('async loading done');
});

// Other stuff:
timer.check('Still more code ahead...');
