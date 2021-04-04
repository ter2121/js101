Key to the new key/value object 
is to create an array of keys and then use those as counters to loop through original array 


// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// select key-value pairs w value 'Fruit'
/* 
input Object
output Object // limit 'Fruit'
required:

algorithm
  declare resultObject = {}
  create function selectFruit
    Loop through argument(produceList)
      Selection Criteria: key-values, value === 'Fruit'
        Get keys
          produceKeys = Object.keys(produceList)
        Get values
          counterKey = produceKeys[i]
          counterValue = produceList[counterKey]
        For ... produceKeys.length...
          if (produceValue === 'Fruit')
            resultObject[counterKey] = counterValue
    Append to resultObject
  Return resultObject
  */

  input Array
  output Array
  required 
    explicit odd index elements * 2
            even index elements no change

  Algorithm
    Set myNumbers = [1, 4, 3, 7, 2, 6];
    Set resultArray = []

    Loop
      Start 0, myNumbers.length, i++
        If i % 2 != 0 
          myNumbers[i] * 2
          append to resultArray
        Else 
          append to resultArray 
    return Result Array


      -
