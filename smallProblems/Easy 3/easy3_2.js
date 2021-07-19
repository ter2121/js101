let message = 'Where We Are Is Where We Are So Entertain Us';

// function logInBox (message) {
//   console.log(`+-${'-'.repeat(message.length)}-+`);
//   console.log(`| ${` `.repeat(message.length)} |`);
//   console.log(`| ${message} |`);
//   console.log(`| ${` `.repeat(message.length)} |`);
//   console.log(`+-${'-'.repeat(message.length)}-+`);
// }


// logInBox(message);

// REQUIRED
//   EMPTY FORM HAS 2 Hyphens
//   Dashed lines repeat L1,L5 
//   Spaces repeat L2, L4
//   Message L3 
// p 
//   input 
//     String 
//   output
//     5 lines of 1 string 
//       3rd line ${inputString}
// e 
//   empty string 
// t STRING 
// a 
//   String.length
//   Inner Line Pattern * string.length

// // TRUNCATION
// REQUIRED
// Second Argument:
//   maxLineLength 40
//   Default = no Maximum

// // Input
//    String 
//    Output
// // A 
//     If message.length >= maxLineLength  
//     slice 0,(maxValue-4) 


let maxLineLength = 40

if (message.length > maxLineLength) {
  message = message.slice(0,(maxLineLength-4))
  console.log(message)
} else console.log(message)