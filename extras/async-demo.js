// sudoku data file is from:
// http://magictour.free.fr/msk_009

var fs = require('fs'); //load node module
var timer = require('./timer'); //load custom module

timer.start();
console.log('readFileSynch:');
var syncData = fs.readFileSync('sudoku-data', {encoding: 'utf8'});
timer.check('sync loading done');
console.log('-----------');



// // Async, Wrong way:
// var asyncData = '';
// timer.start();
// console.log('readFile async:')
// fs.readFile('sudoku-data', {encoding: 'utf8'}, function (err, data) {
// 	asyncData = data;
// 	timer.check('async loading done');
// 	console.log('-----------');
// });
// console.log('Data:',asyncData);
// timer.check('Code moving ahead...');



// Async, Right way:
var asyncData = '';
fs.readFile('sudoku-data', {encoding: 'utf8'}, function (err, data) {
	asyncData = data;
	console.log('Data:',asyncData.slice(0,80));
	timer.check('async loading done');
});

// Other stuff:
timer.check('Still more code ahead...');
