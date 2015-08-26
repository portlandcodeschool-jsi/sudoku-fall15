var _ = require('lodash');


function DigitSet(possibles) {
	this.possibles = [];
  if (arguments.length === 0){
    this.possibles = ['1','2','3','4','5','6','7','8','9'];
	} else if (possibles instanceof Array){
		this.possibles = _.union(possibles);
	} else {
		this.possibles = [possibles];
	}
}

DigitSet.prototype.size = function () {
  return this.possibles.length;
};

DigitSet.prototype.set = function (arrayOfDigits) {
	this.possibles = this.arrayOfDigits;
};

DigitSet.prototype.add = function (digits) {
  if (digits instanceof Array) {
    // remove all non numbers from digits
    digits = digits.filter(function (e) {
      if (isNaN(parseInt(e))) {
        return false;
      }
      if (parseInt(e) < 1 || parseInt(e) > 9) {
        return false;
      }
      return true;
    });
    this.possibles =	_.union(digits, this.possibles);
  } else {
    this.possibles =	_.union([digits], this.possibles);
  }
};

DigitSet.prototype.eliminate = function (digits) {
	if (digits instanceof Array){
	 this.possibles =	_.difference(this.possibles, digits);
 } else{
	 this.possibles =	_.difference(this.possibles, [digits]);
 }
};

DigitSet.prototype.toString = function () {
  return this.possibles.join(',');
};

DigitSet.prototype.toArray = function () {
	this.possibles.sort();
	return this.possibles.slice();
};

DigitSet.prototype.isUncertain = function () {
	if (this.possibles.length > 1){
		return true;
	}else{
		return false;
	}
};

DigitSet.prototype.contains = function (digit) {
	if (this.possibles.indexOf(digit) > -1){
		return true;
	}else{
		return false;
	}
};

module.exports = DigitSet;
