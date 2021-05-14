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



