// function dms (inputFloat) {
// int = Math.floor(inputFloat);
// remainInt = inputFloat % int;
// minutes = remainInt * 60;
// minutesFixed = Math.round(minutes)
// seconds = (minutes - Math.floor(minutes)) * 60
// secondsFixed = Math.round(seconds)
// console.log(`${int}\xB0${minutesFixed}'${secondsFixed}"`)
// }

// dms(93.034773)

// function combineArray (arg1,arg2) {
//   let arr1 = arg1
//   resultArr = arg2.slice()
//   console.log(resultArr)
//   for(let i=0; i < arr1.length; i++) {
//     if(!resultArr.includes(arr1[i])){
//     resultArr.push(arr1[i])}
//   }
//   console.log(resultArr.sort())
// }

// combineArray([1,3,5],[3,6,9])

// function halvsies (inArray) {
//   inArray = inArray
//   outArr1 = [];
//   outArr2 = [];

//   function oddTest (testArray){
//     return testArray.length % 2 === 1
//   }

//   if(oddTest(inArray)){
//     midIndex = Math.ceil(((inArray.length)/ 2));
//     outArr1 = inArray.slice(0,midIndex)
//     outArr2 = inArray.slice(midIndex)
//   } else {
//     midIndex = inArray.length/
//     outArr1 = inArray.slice(0,midIndex)
//     outArr2 = inArray.slice(midIndex)
//   }
//   console.log([outArr1,outArr2])
// }

// halvsies([1,2,3,4,5,7,8,9,0])

// function findDuplicate (inputArray) {
//   sortedInputArr = inputArray.sort();
//   for(let i = 0; i < sortedInputArr.length; i++){
//     if(sortedInputArr[i]===sortedInputArr[i-1]){ console.log(sortedInputArr[i])}
//   }
// }
// findDuplicate([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//   38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//   14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//   78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//   89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//   41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//   55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//   85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//   40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//    7, 34, 57, 74, 45, 11, 88, 67,  5, 58])

// function combineLists (arg1,arg2) {
//   let resultArr = [];
//   let inArr1 = arg1;
//   let inArr2 = arg2;
//   for(let i = 0; i < inArr1.length; i++) {
//     resultArr.push(inArr1[i])
//     resultArr.push(inArr2[i])
//   }
//   console.log(resultArr)
// }

// combineLists([1,2,3],['a','b','c'])

// function multiplierEffect (inputArray) {
//   let inArr = inputArray;
//   let numEntries = inArr.length;
//   multArr = inArr.slice().reduce((a,b) => a * b);
//   multResultInt = multArr / numEntries
//   let resultStr = String(multResultInt.toFixed(3))
//   console.log(resultStr)
// }

// multiplierEffect([2, 5, 7, 11, 13, 17])

// function average (inArray) {
// let inArr = inArray;
// let rawSum = inArr.reduce((a,b) => a + b);
// console.log(rawSum);
// let rawAvg = rawSum / inArr.length;
// let avg = Math.floor(rawAvg)
// console.log(avg)
// }

// average([9, 47, 23, 95, 16, 52])

function afterMidnight (minutes) {
  if(minutes > 1440){minutes = minutes / 60}
  let min = minutes % 60;
  let minString = String(min)
  let hour = Math.floor(minutes / 60);
  let hourString = String(hour)
  if(minString.length < 2){minString = '0'+ minString}
  if(hourString.length < 2){hourString = '0'+ hourString}
  console.log(`${hourString}:${minString}`)
}

afterMidnight(3000)