// require:
// explicit: case sensitive 
//           all characters evaluated 
// input: string 
// output: true/false 

// algorithm
// split 
// reverse 
// join
// halo >> 'h','a','l','o' >> 'o','l','a','h' >> .join()

// ## Key is to remember that reverse() mutates the array 
// ## Don't actually need .join() to compare b/c you are returning a true/false 

function isPalindrome(inputString) {
  let inputStraight = inputString.split('');
  let inputReverse = inputStraight.slice().reverse();
  console.log(inputStraight);
  console.log(inputReverse);
  if (inputStraight === inputReverse) {
    console.log(true);
  } else { console.log(false)}
}

isPalindrome("HiHasdfasdfasdfasdfasdf");
