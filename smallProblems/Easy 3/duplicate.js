// arr = [NaN, null, undefined, 3]
// console.log(arr)
let testArray = [1, 2, "a", 1, "b", "a","b"]
let newArray = []

function duplicate(testArray) {
  let copyArray = testArray;
  for (let i =0; i < copyArray.length; i++) {
    console.log(copyArray[i])
    if (!newArray.includes(copyArray[i])){
        newArray.push(copyArray[i])
    }
  }
  console.log(newArray)
}

duplicate(testArray)

// duplicate test array 
// create new empty array
// iterate through array elements 
//   for each element 
//     if NOT included in empty arr 
//     append to arr
    
// HOW TO SOLVE w/o a Computer
