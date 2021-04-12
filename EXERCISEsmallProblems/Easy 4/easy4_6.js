/*
REQUIRE:
  empty string returns empty
  use Map function 
input: array of numbers 
output: new array w same length. each element totals previous element

ALGO:
  set array
  set newTotalArray

  Map array
    i => array[i-1] + array[i]

  PATTERN 
    2  >> 2 array[0] == newTotalArray[0]
    5  >> 2 + 5 array[0] + array[1] == newTotalArray[1]
    13 >> 2 + 5 + 13 array[0] + array[1] + array[2] == newTotalArray[2]
        OR 
    14 >> newTotalArray[0] == 14 >> array [0]
    25 >> newTotalArray[1] == 14 + 11 >> array[0] + array[1]
    32  >> newTotalArray[2] == 14 + 11 + 7 >> array[0] + array[1] + array[2]
    47 >> newTotalArray[3] == 14 + 11 + 7 + 15 >> array[0] + array[1] + array[2] + array[3]
    67 >> newTotalArray[4] == 14 + 11 + 7 + 15 + 20 >> array[0] + array[1] + array[2] 
                              + array[3] + array[4] 
*/

function runningTotal(array) {
  let sumTotal = 0;
  newTotalArray = array.map(n => sumTotal += n);
  console.log(newTotalArray);
}
runningTotal([2,5,13]);
