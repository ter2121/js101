function isLeapYear (year) {
  if (year % 4 === 0){
    if (year < 1752) {
      console.log(true)
    }
    else {
      if ((year % 100) === 0 && (year % 400) === 0) {
        console.log(true)
      } else if ((year % 100) === 0) {
        console.log(false)
      } else {
        console.log(true)
      }
    }
  } else (console.log(false))
}


isLeapYear(2016)
isLeapYear(2015)
isLeapYear(2100)
isLeapYear(2400)
isLeapYear(24000)
isLeapYear(240001)
isLeapYear(2000)
isLeapYear(1900)
isLeapYear(1752)
isLeapYear(1700)
isLeapYear(1)
isLeapYear(100)
isLeapYear(400)

/* 
Concise Answer:
function isLeapYear(year) {
    if (year < 1752) {
        return (year % 4 === 0);
    }
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
*/