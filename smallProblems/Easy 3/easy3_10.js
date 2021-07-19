// REQUIRED:
// greater than 0 AD 
// 01-100 = 1st century
// 4 stringEnd cases:
//   1 st  
//   2 nd 
//   3 rd 
//   th 

// input : integer (yearArg)
// output string + stringEnd

//pseudocode
// Reduce (yearArg) to century (55, 100, 500, 1000, 1800)
//           centuryConversion = Math.ceil (yearArg / 100)
//
// Exceptional Endings w 1 2 3 have st, nd, rd suffix
//  Endings w 11 12 13 are exceptions, use th
// Else th ending 
// 

Basic idea:
To get centuryNum
  yearArg / 100
To get general suffix rule:
  centuryNum % 10
  1 >> st
  2 >> nd 
  3 >> rd 
  default >> th 

Exception for 11, 12, 13
  

/* 
Experiment:
11th
12th
13th
*/


