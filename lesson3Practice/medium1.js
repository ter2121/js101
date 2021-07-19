// Require:
// 1 whitespace added each line 
// Add whitespace to FRONT
// input 1 String
// output 10 lines 1 string 

// pseudocode
// Set string 
// Set stringAddSpace = string
// Set whitespace = ''
// LOOP 
//   + whitespace 

// LS ANSWER USES REPEAT

let string = 'The Flintstones Rock';
let whitespace = " ";

function flintstones (string) {
  let stringAddSpace = string;
  console.log(stringAddSpace);
  for (let i = 0; i < 10; i++) {
    stringAddSpace = whitespace + stringAddSpace;
    console.log(stringAddSpace);
  }
}

flintstones(string)
