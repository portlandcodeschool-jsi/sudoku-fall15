
Grid constructor
----------------
  new Grid(initString) ==> grid instance



DigitSet constructor
----------------
  new DigitSet(digit) ==> DigitSet instance where digit used to define the possibleValues



DigitSet objects
----------------

Properties:
  possibleValues: [digits 1-9]

Methods:
  removePossibleValue(digit) ==> undefined
  size() ==> integer 1-9
  possibleValueArray() ==> array stored in possibleValues property



Grid objects
----------------

Properties:
  digitSets: [DigitSet instances]

Methods:
  getRow(cellToken) ==> rowToken (aka groupToken)
  getColumn(cellToken) ==> columnToken (aka groupToken)
  getBlock(cellToken) ==> blockToken (aka groupToken)
  groups(cellToken) ==> array of rowToken, columnToken, and blockToken associated with cellToken
  getPossibleValues(cellToken) ==> array stored in possibleValues property for the given cellToken
  updatePossibleValues(cellToken, digit) ==> undefined; removes given digit from the possibleValues property for the given cellToken
  cells(groupToken) ==> array of cell tokens associated with groupToken
  exportString ==> string of 81 characters



Viewer objects
----------------

Properties:

Methods:
  displayBoard ==>
