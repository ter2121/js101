REQUIRED:
greater than 0 AD 
01-100 = 1st century
4 stringEnd cases:
  st 
  nd 
  rd 
  th 

input : integer 
output string + stringEnd

//pseudocode
// centuryConversion = number / 100
// if last numbers != 0 Math.ceil(century) + stringEnd
// if last number = 0 Math.floor(number) + stringEnd
