/*
input 
  string 
output
  object 
    k:         v 
    charCount: total words with this count 
REQUIRES
  any character (apostrophe, num, alpha) is counted as part of word 

  ALGO
    Set inputString
    Set resultObject
    CONVERT inputString  
      to arrayOfWords
        (.split(' '))
    EXTRACT LOGIC 
      length of each elementWord
      Total of each length  
    Set resultKey
      assign  = length of elementWord 
    Set resultValue
      assign = Total of each length 

example
  arrayOfWords = [four,score,and,seven.]
EXTRACT LOGIC 
    LOOP
 for (let i=0; i < arrayOfWords.length; i++) {
  let wordLength = arrayOfWords[i].length;
  resultObject[wordLength] += 1;
 }
*/
function wordSizes(inputStrings) {
  let resultObject = {};
  let arrayOfWords = inputStrings.split(' ');
  console.log(arrayOfWords)
  for (let i = 0; i < arrayOfWords.length; i++) {
    let wordLength = arrayOfWords[i].length;
    if(!resultObject[wordLength]) {
      resultObject[wordLength] = 0;
    }
    resultObject[wordLength] += 1;
  }
  console.log(resultObject)
}

wordSizes('Four Se Cool df Peddddddru df and Seven.')
