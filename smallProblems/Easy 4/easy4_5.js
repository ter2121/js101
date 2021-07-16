// require:
//   explicit: case insensitive
//             ignore all non-alphanumerics (ex. apostrophe)
// input string 
// output true/false Boolean

// algorithm
//   set first string = array of letter elements 
//     convert first string >> firststring(lowerCase)
//   set second string = reversed array of first string letter elements
//   set empty result = empty array

//   test second string element T/F is alphanumeric
//     LOOP
//       element >= a && <= z
//       element >= 0 && <= 9
//     append T to empty result 

function isRealPalindrome (inputString) {
  let straightString = inputString.split('').join()
  let reverseString = inputString.split('').reverse().join()
  let emptyArray = [];
  console.log(straightString);
  console.log(reverseString);

  if (straightString === reverseString) {
    console.log('Equal');
    emptyString = []
    for (let i = 0; i <= reverseString.length; i++) {
      if ((reverseString[i] >= 'a' && reverseString[i] <= 'z') || (reverseString[i] >= 0 && reverseString[i] <= 9)) {
        emptyArray.push(reverseString[i]);
      }
    } 
  } else console.log('Not Equal')
  console.log(emptyArray.join(''));
}

isRealPalindrome("ma;1d1;am");
