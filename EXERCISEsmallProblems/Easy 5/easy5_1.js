/*
input
  floating Number
output
  string [degrees,min,sec]
REQUIRE:
  degree Symbol, single quote, double quote 

Example:
  48.2625 = 48 + .3625 deg = 48 + (60/60)*.3625
                           = 48 + (21.75/60)deg = 48 + 21.75 
                           = 48 + 21 + (60/60).75
                           = 48 + 21 + (45/60)min
                           = 48 + 21 + 45

Algo 
  set inputNumber
  set outputString

  CONVERT 
    function baseDegrees
      Get inputString as integer 
      >> Floor(inputString) 
    function baseMinutes
      Get remainder of inputString and baseDegrees
      Convert to units of 60
       >> Floor(inputString - baseDegrees) * 60
    function baseSeconds
      Get remainder of inputString and (baseDegrees and baseMinutes)
      Convert to units of 60
      >> Floor (inputString - baseDegrees) * 60
  OUTPUT
    join baseDegrees, baseMinutes, baseSeconds in String

*/

function dms(inputString) {
  let baseDegrees = Math.floor(inputString);
  console.log(baseDegrees)
  let baseMinutes = Math.floor(60 * (inputString - baseDegrees));
  console.log(baseMinutes)
  let baseSeconds = Math.floor(60 * 60 * (inputString - baseDegrees - (baseMinutes / 60)));
  console.log(baseSeconds);
}

dms(93.034773)