let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
/*
Data Structure:
  input: Array of 4 subArrays of elNumbers
  output: Array of 4 subArrays of elNumbers>>multiples of 3
  
Required: 
  Use Filter
  Identical Array Structure (prob need MAP)

Algorithm:
  -declare a resultArray 
  -LOOP through subArray
    - LOOP through subArray's elNumbers
      - check if elNumber % 3 === 0
        - if true, return it in an array 
*/

let multiple = function (array) {
  let resultArray = array.map( subArray => {
    return subArray.filter( elNumber => elNumber % 3 === 0)
  })
  console.log(resultArray)
  return resultArray
}

multiple(arr)
