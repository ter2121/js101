// Requires:
//   Each character is iterated with case flipped (binary)
// Input 
//   String 
// Output
//   NEW String 

// SET munstersDescription
// SET munstersToLower
// SET munstersToUpper
// SET newMunsters ""
// LOOP
//   TOuppercase String, TOlowercase string
//   if munstersDescription[0] === toUpperCase[0] THEN munstersDescription[0].TOlowercase
//     newMunsters + munstersDescription[0].TOlowercase

let munstersDescriptionString = "The Munsters are creepy and spooky.";
let munstersLower = munstersDescriptionString.toLowerCase();
let munstersUpper = munstersDescriptionString.toUpperCase();
let newMunsters = "";
function munstersDescription (ARG) {
  for (let i = 0; i < ARG.length; i++) {
    console.log(ARG[i]);
    if (munstersLower[i] === ARG[i]) {
      newMunsters += ARG[i].toUpperCase();
    } else if (munstersUpper[i] === ARG[i]) {
      newMunsters += ARG[i].toLowerCase();
    }
  }
  console.log(newMunsters);
}

munstersDescription(munstersDescriptionString);