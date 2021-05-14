<<<<<<< HEAD
// let input = "What's up doc?"

// function letterCount(input){
//   strInArr = input.split('')
//   let resultObj = {}

//   for (let i=0; i< strInArr.length; i++) {
//     let wordClean = cleanHelper(strInArr[i])
//     if(!resultObj[wordClean.length]){
//       resultObj[wordClean.length] = 0
//     }
//     resultObj[wordClean.length] += 1
//   };

//   function cleanHelper(wordIn){    
//     let cleanWord = ''   
//     let word = wordIn.toLowerCase()
//     for(let i = 0; i < word.length; i++){  
//       if(!(word[i] >= 'a' && word[i] <= 'z')){
//         continue
//       } else {cleanWord += word[i]}
//     }
//     return cleanWord;
//   }

//   console.log(resultObj)
// }

// letterCount(input)



=======


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
>>>>>>> 9280802e3bace6d3eaa34bdd837c33f598b76a1d
