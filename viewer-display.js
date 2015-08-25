var str = '123456789123456789123456789123456789123456789123456789123456789123456789123456789';

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

function columns(arr){
 colm = [];
for(var x = 0; x < arr.length; x++){
 colm.push('!');
 for(var i = 0; i < arr.length; i++){
   colm.push(arr[i][x]);
 }
}
colm = colm.join('').split('!').slice(1);
}

columns(spltArray);

function blocks(row){
 var block = [];
 for (var i = 0; i < 3; i++) {
   block.push(row[i]);
   block.push(row[i+1]);
   block.push(row[i+2]) ;
 }
}

blocks(spltArray);
var plot = spltArray;
function joiner(str){
  arr=[]
  y = str.split("");
  x = y.join(" ");
  return x;
}
var arr = plot.map(joiner)
var view = console.log("+-------+-------+-------+" + "\n"
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
