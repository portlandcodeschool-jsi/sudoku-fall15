var DigitSet = require('./digitset');

var GridFactory = (function() {
	function Grid(initstr) {
		//create 81 objects
		var arrayOfObjects = [];
		var arrayOfInitStr = initstr.split("");
		for (i = 0; i < 81; i++) {
			function Object(id) {
				this.id = id;
				this.row = (Math.ceil((id+1)/9));
				this.column = (id % 9) + 1;
				this.block = Math.floor((this.column-1)/3)*3 + Math.floor((this.row-1)/3);
				this.initialValue = arrayOfInitStr[i];
				this.setValue = function(cellToken) {
					this.initialValue = cellToken;
				};
				this.getValue = function(cellToken, digitSet) {
					
				};
				}
				arrayOfObjects.push(new Object(i));
		}
		return arrayOfObjects;

		//separate initial string
		//add values of initial string into 81 objects
	}
	return Grid;
})();





console.log(GridFactory);// for testing only

module.exports = GridFactory;
