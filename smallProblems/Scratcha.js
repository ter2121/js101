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

// function doubleOutput(integer) {

//   if(doubleNumber(integer)) {
//     console.log(integer)
//   } else console.log(integer * 2)

//   function doubleNumber(integer) {
//     let integerString = String(integer)

//     if(integerString.length % 2 === 1){
//       return false 
//     }
                                                                                                                                                                                                                         
//     let strArr = integerString.split('')
//     let length = Math.floor(strArr.length / 2)
//     strHI = strArr.slice(0,length).join()
//     strLO = strArr.slice(length).join()
//     if(strHI === strLO){
//       return true
//     }
//     else {
//       return false
//     }
//   }
 
// }

// doubleOutput(17171717)

// let inputArray = [3,4,5,6,7]

// function sumRunner(inputArray) {
//   let resultArr = [inputArray[0]]
//   for(let i = 1; i < inputArray.length; i++) {
//     resultArr.push(inputArray[i]+inputArray[i-1])
//   }
//   console.log(resultArr)
// }

// sumRunner(inputArray)


// *********************************************

// let inputString = "Hello babe"

// function letterCount(inputString) {
//   strInArray = inputString.split(' ')
//   let resultObj = {}
//   for (let i = 0; i < strInArray.length; i++) {
//     let wordClean = cleanHelper(strInArray[i])
//     if(wordClean.length === 0) {continue}
//     resultObj[wordClean.length] = resultObj[wordClean.length] || 0
//     resultObj[wordClean.length] += 1
//   }
//   console.log(resultObj)
// }

// function cleanHelper (wordIn) {
//   let cleanWord = ''
//   let word = wordIn.toLowerCase()
//   for (let i=0; i< word.length; i++){
//     if( isLetter(word[i])){
//       cleanWord += word[i]
//     }
//   }
//   return cleanWord
// }

// function isLetter(char) {
//   return char >='a' && char <= 'z'
// }

// letterCount(inputString)


// *********************************************
// function letterSwap (inString) {
// let resultArr = [];
// let inArr = inString.split(' ')

// for(let i = 0; i < inArr.length; i++) {
//   word = inArr[i]
//   resultArr.push(swapHelper(word))
// }
// console.log(resultArr)
// }

// function swapHelper(wordIn) {
//   letterFirst = wordIn[0]
//   letterLast = wordIn[wordIn.length-1]
//   console.log(letterFirst,letterLast)
//   newWord = letterLast+wordIn.slice(1,wordIn.length-1)+letterFirst
//   return  newWord
// }

// letterSwap('Oh what a wonderful day it is')

// function isUpperCase (input) {
//   let inStr = input
//   function helperAlphaOnly(inStr){
//     let alphaOnly = ''
//     for(let i = 0; i < inStr.length; i++){
//       if(inStr[i] >= 'A' && inStr[i] <= 'z'){
//         alphaOnly += inStr[i]
//       }
//     }
//     return alphaOnly
//   }
//   let cleanStr = helperAlphaOnly(inStr)
//   console.log(cleanStr === cleanStr.toUpperCase())
// }

// isUpperCase('')

// function deleteVowels (input) {
//   let inArr = input
//   let resultArr=[]
//   for(let i=0;i<inArr.length;i++){
//     let newEl = helperClean(inArr[i])
//     resultArr.push(newEl)
//   }
//   function helperClean(inString){
//     let vowels='aeiou'
//     let cleanStr = ''
//     for(let i=0;i<inString.length;i++){
//       let char = inString[i].toLowerCase()
//       console.log(char)
//       if (vowels.includes(`${char}`)){
//         continue
//       }
//       cleanStr += inString[i]
//     }
//     return cleanStr
//   }
//   console.log(resultArr)
// }

// deleteVowels(['green', 'YELLOW', 'black', 'white'])

// function caseCounter (input){
//   let inputString = input
//   let resultObj = {lowercase:0,uppercase:0,neither:0}
//   function helperLower(countLow){
//     let count = 0
//     for(let i=0; i < countLow.length; i++){
//       if(countLow[i] >= 'a' && countLow[i] <= 'z'){
//         count ++
//       }
//     }
//     resultObj['lowercase']=count
//   }
//   function helperUpper(countHigh){
//     let count = 0
//     for(let i=0; i < countHigh.length; i++){
//       if(countHigh[i] >= 'A' && countHigh[i] <= 'Z'){
//         count ++
//       }
//     }
//     resultObj['uppercase']=count
//   }
//   function helperNeither(countNone){
//     let count = 0
//     for(let i=0; i < countNone.length; i++){
//       if(!((countNone[i] >= 'A') && (countNone[i] <= 'z'))){
//         console.log(countNone[i])
//         count ++
//       }
//     }
//     resultObj['neither']=count
//   }
//   helperLower(inputString)
//   helperUpper(inputString)
//   helperNeither(inputString)
//   console.log(resultObj)
// }

// caseCounter('dfDD$$$$$')


function isPalindrome (input){

}

<<<<<<< HEAD
doubleOutput(17171717)
>>>>>>> 9280802e3bace6d3eaa34bdd837c33f598b76a1d
=======
isPalindrome('Madam'); 
>>>>>>> 72aead78d3ce14d88beac84f64a27d5a2dec3a1e
