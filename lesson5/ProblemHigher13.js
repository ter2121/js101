let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/*
Data Structure:
  input: ARRAY of subArray of elNumbers
  output: ARRAY of subArray of elNumbers SORTED
Required:
  SORT condition is sum of odd numbers in subArray

Algorithm:
  LOOP over arr
    LOOP over subArray
      - filter elNum % 2 === 0
      - return filter result to new array
        - add odd elNum
    Sort 3 result arrays
      - ascending (a-b)
*/

let resultArray = arr.sort( (subArrayA, subArrayB) => {
    let aOddSum = subArrayA.filter(elNum => elNum % 2 === 1)
    let bOddSum = subArrayB.filter(elNum => elNum % 2 === 1)
    return aOddSum.reduce((a,b) => a + b) - bOddSum.reduce((a,b) => a + b)
})

console.log(resultArray)



