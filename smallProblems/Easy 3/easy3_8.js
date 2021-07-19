// Requires
// Inputs
//   3 arguments (integers)
// Outputs
//   Letter grade (string)
// Test 
//   0-100
// numberConversion (Array/Object)

// //Pseudo
// average 3 arguments 
//   arg1 + arg2 + arg3 / 3
// compare averageAnswer with letterGradeConversion
//   > 90
//   > 80
//   > 70
//   > 60
//   > 50
let grade1 = 70
let grade2 = 80
let grade3 = 90

function getGrade (grade1,grade2,grade3) {
  let average = ((grade1+grade2+grade3) / 3)
  console.log(average)
  if (average >= 90) {
   console.log('A')  
  } else if (average >= 80) {
    console.log('B')
  }
}

getGrade(grade1,grade2,grade3);