function multPairs(array1,array2){
  let resultArr = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      resultArr.push(array1[i]*array2[j]);
    }
  }
  sortedResult = resultArr.sort((a,b)=> a-b);
  console.log(sortedResult)
}

multPairs([2,4],[4,3,2,1])




// function leadString (input) {
//   let inString = input;
//   subStrArr = [];
//   for(let i = 1; i <= inString.length; i++) {
//     let sub = inString.slice(0,[i]);
//     subStrArr.push(sub)
//   }
//   console.log(subStrArr)
// }

// leadString('abc')

// function allSubStrings (input) {
//   let inString = input;
//   let subStrArr = [];
//   for(let j = 0; j <= inString.length; j++){
//     for(let i = 1; i <= inString.length; i++) {
//       let sub = inString.slice(j,i);
//       if(sub){
//         subStrArr.push(sub)
//       }
//     }
//   }
//   console.log(subStrArr)
// }

// allSubStrings('abcde')

// function palindromeSubstring (input) {
//   let inString = input;
//   let subStrArr = [];
//   for(let j = 0; j <= inString.length; j++) {
//     for(let i = 1; i <= inString.length; i++) {
//       let sub = inString.slice(j,i);
//       if(sub){
//         subStrArr.push(sub)
//       }
//     }
//   }
//   console.log(subStrArr)
// }


// palindromeSubstring('abcde');

// function sumSums (input) {
//   let inArray = input;
//   let total = 0
//   for(i=1; i <= inArray.length; i++) {
//     let subSeq = inArray.slice(0,i);
//     console.log(subSeq)
//     let sumSubSeq = subSeq.reduce( (accum,curr) => accum + curr);
//     total += sumSubSeq
//   }
//   console.log(total)
// }

// sumSums([1,5,7,3])

// function groceryList (input) {
//   inArr = input;
//   resultArr = [];
//   for (let i = 0; i < inArr.length; i++) {
//     el = inArr[i]
//     fruit = el[0]
//     multiple = el[1]
//     for(let j = 0; j < multiple; j++) {
//       resultArr.push(fruit)
//     }
//   }
//   console.log(resultArr)
// }

// groceryList([['apple', 3], ['orange', 1], ['banana', 2]])