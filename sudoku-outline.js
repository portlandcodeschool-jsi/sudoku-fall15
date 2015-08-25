
Grid constructor
----------------
  new Grid(initString) ==> grid instance

DigitSet constructor
----------------
  new DigitSet(digit) ==> DigitSet instance where digit used to define the possibleValues


DigitSet objects
----------------

Properties:
  // id = (number between 0 and 80)
  // definiteValue = number
  possibleValues: [digits 1-9]

Methods:
  // adjustDefiniteValue()
  removePossibleValue(digit) ==> undefined
  size() ==> integer 1-9
  possibleValueArray() ==> array stored in possibleValues property



Grid objects
----------------

Properties:
  digitSets: [DigitSet instances]

Methods:
  // updatePossibleValues(id)
  returnRowArray(id)
  returnColumnArray(id)
  returnBlockArray(id)
  returnPossibleValues(id)
  returnDefiniteValue(id)
  updateDefiniteValue(id)
  importInitialValues
  exportString



Viewer objects
----------------

Properties:

Methods:
  displayBoard
