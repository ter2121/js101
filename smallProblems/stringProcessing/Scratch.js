// function staggeredCaps (input) {
//   let inputStr = input;
//   let inputArr = inputStr.split('');
//   let resultArr = []
//   inputArr.map((element,index) => {
//     if(index % 2 === 1) {
//       console.log(element.toUpperCase())
//       resultArr.push(element.toUpperCase())
//     } else {
//       resultArr.push(element.toLowerCase())
//     }
//   })
//   console.log(resultArr.join(''))
// }

// staggeredCaps('ignore 77 the 4444 numbers')

function howLong (input) {
  let inArr = input.split(" ");
  let resultArr = [];
  inArr.map(element => {
    resultArr.push(`${element} ${element.length}`)
  })
  console.log(resultArr)
}

howLong("Monkey business")
