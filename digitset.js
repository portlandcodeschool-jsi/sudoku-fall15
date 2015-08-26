// var testStr = ".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8";
// var _ = require('lodash');
//
//
// function DigitSet(initstr) {
// 	// your code here
// }
//
// console.log(DigitSet);// for testing only
//
// module.exports = DigitSet;

var ObjectFactory = (function() {
var potential = [];
	function Square(id) {
		// if (!isValidID(id))
		// 	return null;

		this.id = id;
		this.row = (Math.ceil((id+1)/9));
		this.column = (id % 9) + 1;
		this.block = Math.floor((this.column-1)/3)*3 + Math.floor((this.row-1)/3);
		this.potential = potential;
		}

	return Square;
	})();

	var square = new ObjectFactory(0);
	console.log(square);

	// var ObjectCreator = function(testStr){
	// 	// turn string into a array:
	// 	function splitter(testStr){
	// 	  var x = testStr.split('');
	// 	  var arr = [];
	// 	  for(var i = 0; i < x.length; i++){
	// 	    if (i === 0){
	// 	      arr.push(testStr[i]);
	// 	    }
	// 	    else if(i % 9 === 0){
	// 	      arr.push('*');
	// 	      arr.push(testStr[i]);
	//
	// 	    }else {
	// 	      arr.push(testStr[i]);
	// 	    }
	// 	  }
	// 	  arr = arr.join('').split('*');
	// 	  return arr;
	// 	}
	//
	// 	spltArray = (splitter(testStr));
	//
	// 	return this.spltArray;
	// };
// 	ObjectCreator.fullSet = [];
// 	for (var id =0; id<81; ++id) {
// 		ObjectCreator.fullSet[id] = new ObjectCreator();
// 	}
// 	return ObjectFactory;
// })();
