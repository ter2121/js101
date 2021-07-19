// Require 
//   if consecutive non-alpha, ONLY 1 space 
//   if non-alpha, 1 space
//   if alpha, leave it 
//   initial defined array of alphabet characters in lowercase 
//   lowercase each input 
// input 
//   String 
// output 
//   String only alphanumeric + space 

//pseudoCode
// SET defined alphaArray
// SET inputString
// SET newString
// Compare inputString.charAt(i) to alphaArray.includes()
// if includes
// add to newString
// else nothing

// Dont necessarily need alphaArray
// JS engine will naturally compare lowercase to lowercase, upperto Upper
// See solution

let alphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
inputString = "---what's my BITCH +*& line?"
newString = ""

  function cleanUp (inputString) {
    inputStringLowerCase = inputString.toLowerCase();
    for (let i =0; i<inputStringLowerCase.length; i++){
      if (alphaArray.includes(inputStringLowerCase[i])){
        newString += inputStringLowerCase[i]
      }
    }
    console.log(newString)
  }

  cleanUp(inputString)