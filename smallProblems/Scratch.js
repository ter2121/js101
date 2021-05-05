

// function dailyDouble(string) {
//   let resultStr = '';
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] != string[i+1]) { 
//       resultStr += string[i]
//     }
//   }
//   console.log(resultStr)
// }

// dailyDouble('ddaaiillyy ddoouubbllee')


// int = 33
// resultStr = ''

// for(i=1;i<int;i++){
//   if (i%2 ===1) {
//     resultStr += '1'
//   } else resultStr += '0'
// }

// letResult = resultStr.length
// console.log(letResult)

// let arraySample = [5,3,2]

// let answer = arraySample.filter(element => element > 2)
// console.log(answer)


// "0" == 0

function doubleOutput(integer) {

  if(doubleNumber(integer)) {
    console.log(integer)
  } else console.log(integer * 2)

  function doubleNumber(integer) {
    let integerString = String(integer)
    if(integerString.length % 2 === 1){
      return false 
    }
    let strArr = integerString.split('')
    let length = Math.floor(strArr.length / 2)
    strHI = strArr.slice(0,length).join()
    strLO = strArr.slice(length).join()
    if(strHI === strLO){
      return true
    }
    else {
      return false
    }
  }
 
}

doubleOutput(17171717)