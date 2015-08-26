var TestStrGenerator = require('./data_into_testString.js');
var GridFactory = require('./grid_constructor.js');
var str = TestStrGenerator;

var ObjectFactory = function(id) {
		var potential = [];

		this.id = id;
		this.row = (Math.ceil((id+1)/9));
		this.column = (id % 9) + 1;
		this.block = Math.floor((this.column-1)/3)*3 + Math.floor((this.row-1)/3);
    this.getRow = function(){
      var row = getRow(str);
      return row[this.id];
    };
    this.getColumn = function(){
      var col = getColumn(getRow(str));
      return col[this.id];
    };
    this.getBlock = function(){
      var block = getBlock(getRow(str));
      return block[this.id];
    };
		this.potential = function(){
      var possible = [1,2,3,4,5,6,7,8,9];
      var column = this.getColumn();
      var row = this.getRow();
      var block = this.getBlock();
      possible = possible.filter(function(val) {
        return column.indexOf(val) == -1;});
      possible = possible.filter(function(val) {
        return row.indexOf(val) == -1;});
      possible = possible.filter(function(val) {
        return block.indexOf(val) == -1;});
      return possible;
    };


   this.getRow = function(str){
    var x = str.split('');
    var arr = [];
    for(var i = 0; i < x.length; i++){
      if (i === 0){
        arr.push(str[i]);
      }
      else if(i % 9 === 0){
        arr.push('*');
        arr.push(str[i]);

      }else {
        arr.push(str[i]);
      }
    }
    arr = arr.join('').split('*');
    return arr;
  };

   this.getColumn = function(arr){
    col = [];
  for(var x = 0; x < arr.length; x++){
    col.push('!');
    for(var i = 0; i < arr.length; i++){
      col.push(arr[i][x]);
    }
  }
  col = col.join('').split('!').slice(1);
  return col;
};

  this.getBlock = function(row){
    var output;
    var block = '';
    var count1 = -3, count2 = 0;
    for (var x = 0; x < 3; x++) {
      count1 = count1 + 3;
      count2 = count2 + 3;
      for (var i = 0; i < 3; i++) {
        block += '!';
        for (var y = 0; y < 3; y++) {
          block += row[y].slice(count1, count2);
          }
      }
    }
    output = block.split('!');
    output.shift();
    return output;
  };

	};

	var cell = new ObjectFactory(12);
	console.log(cell);

  // console.log(square.getColumn());
  // console.log(square.getRow());
  // console.log(square.getBlock());
  // console.log(square.potential());

	module.exports = ObjectFactory;
