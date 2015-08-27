var GridFactory = require('./grid_constructor');
var ObjectFactory = require('./digitSet_Constructor');
var currentStr = require('./updater');
var testStr = require('./main');

var cellSet = [];
var Viewer = function(str){
function splitter(str){
 var x = str.split('');
 var arr = [];
 for(var i = 0; i < x.length; i++){
   if (i === 0){
     arr.push(str[i]);
   }
   else if(i % 3 === 0){
     arr.push('*');
     arr.push(str[i]);

   }else {
     arr.push(str[i]);
   }
 }
 arr = arr.join('').split('*');
 return arr;
}

spltArray = (splitter(str));


var plot = spltArray;
function joiner(str){
  arr=[];
  y = str.split("");
  x = y.join(" ");
  return x;
}
var arr = plot.map(joiner);
var view = ("+-------+-------+-------+" + "\n"
+"| "+arr[0]+" | "+arr[1]+" | "+arr[2]+" |"+"\n"
+"| "+arr[3]+" | "+arr[4]+" | "+arr[5]+" |"+"\n"
+"| "+arr[6]+" | "+arr[7]+" | "+arr[8]+" |"+"\n"
+"+-------+-------+-------+" + "\n"
+"| "+arr[9]+" | "+arr[10]+" | "+arr[11]+" |"+"\n"
+"| "+arr[12]+" | "+arr[13]+" | "+arr[14]+" |"+"\n"
+"| "+arr[15]+" | "+arr[16]+" | "+arr[17]+" |"+"\n"
+"+-------+-------+-------+" + "\n"
+"| "+arr[18]+" | "+arr[19]+" | "+arr[20]+" |"+"\n"
+"| "+arr[21]+" | "+arr[22]+" | "+arr[23]+" |"+"\n"
+"| "+arr[24]+" | "+arr[25]+" | "+arr[26]+" |"+"\n"
+"+-------+-------+-------+")
console.log(view);
};


module.exports = Viewer;
