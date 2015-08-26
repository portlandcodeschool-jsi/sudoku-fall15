var _ = require('lodash');



function DigitSet(singleDigit) {
  this.possibilities = [];

  this.removePossibleValue = function(digit) {
    var location = this.possibilities.indexOf(digit);
    this.possibilities.splice(location , 1);
  };

  this.size = function() {
    return this.possibilities.length;
  };
  this.possibilitiesAsString = function(){
    return this.possibilities.join();
  };
  this.possibilitiesAsArray = function(){
    return this.possibilities;
  };

  if ( singleDigit === ".") {
     this.possibilities = ["1","2","3","4","5","6","7","8","9"];
   } else {
     this.possibilities = [singleDigit];
   }
}

//console.log(DigitSet);// for testing only

module.exports = DigitSet;
