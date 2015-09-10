var _ = require('lodash');

function DigitSet(singleDigit) {
  this.possibilities = [];

  if (singleDigit === ".") {
     this.possibilities = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
   } else {
     this.possibilities = [singleDigit];
   }

  this.eliminate = function(digit) {
    var location = this.possibilities.indexOf(digit);
    if(location >= 0) {this.possibilities.splice(location, 1);}
  };

  this.size = function() {
    return this.possibilities.length;
  };

  this.toString = function() {
    return this.possibilities.join();
  };

  this.toArray = function() {
    return this.possibilities;
  };

  this.add = function(digit) {
    this.possibilities.push(digit);
  };

  this.contains = function(digit) {
    return this.possibilities.indexOf(digit) >= 0;
  };

  this.set = function(arrayOfDigits) {
    this.possibilities = arrayOfDigits;
  };

  this.eliminateMult = function(digitSet) {
    var self = this;
    function eliminateDigit(str) {
      var location = self.possibilities.indexOf(str);
      if(location >= 0) {self.possibilities.splice(location, 1);}
    };

    digitSet.forEach(eliminateDigit);
  };

  this.addMult = function(digitSet) {
    var self = this;
    function addDigit(str) {
      self.possibilities.push(str);
    };

    digitSet.forEach(addDigit);
  };
};

// console.log(DigitSet); // for testing only

module.exports = DigitSet;
