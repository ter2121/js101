let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
/*
NOTE:
Didn't follow REQR - - my original answer just filtered into a new array
Directions REQR "same structure" array. This should confirm use of MAP.
/*
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3. 
*/

let arrMultiple = arr.map( subArray => {
  return subArray.filter( subNumber => subNumber % 3 === 0);
});

console.log(arrMultiple)

/* ORIGINAL ANSWER
PEDAC
    input: ARRAY: 4 subArrays, *subNum
    output: ARRAY: New, subArray's *subNum * 3
    algorithm:
    LOOP thru each subArray in arr
      LOOP thru each subNum in subArray
      FILTER subNum % 3 = 0
    RETURN filtered array  

let multipleArray = []
arr.forEach( subArray => {
  
  subArray.forEach( subNum => {
    if(subNum % 3 === 0) {
      multipleArray.push(subNum)
    }
  });
});
console.log(multipleArray)
*/