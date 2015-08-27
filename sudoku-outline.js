
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

// Constructor:
// new Grid(initStr) ==> grid instance

Properties:
  digitSets: [DigitSet instances]

Methods:
  grid.getRow() ==> array of group tokens (all rows)
  grid.getCol ==> array of group tokens (all cols)
  grid.getBlock ==> array of group tokens (all blocks)
  grid.getRow(cellToken) ==> rowToken (aka groupToken)
  grid.getCol(cellToken) ==> columnToken (aka groupToken)
  grid.getBlock(cellToken) ==> blockToken (aka groupToken)
  groups(cellToken) ==> array of rowToken, columnToken, and blockToken associated with cellToken
  grid.getPossible(cellToken) ==> array stored in possibleValues property for the given cellToken
  grid.setPossible(cellToken, digitSet) ==> undefined; removes given digit from the possibleValues property for the given cellToken
  cells(groupToken) ==> array of cell tokens associated with groupToken
  grid.toString ==> string of 81 characters



Viewer objects
----------------

Viewer Constructor
new Viewer(grid) ==> viewer instance

Properties:

Methods:
  displayBoard ==>
