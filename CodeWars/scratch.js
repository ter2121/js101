function nbYear(p0, percent, aug, p) {
  let percent2 = percent * .01
  let  yearBase = p0
  console.log(percent2, yearBase)
  let  yearCurrent = yearBase;
  let  yearCount = 0;
  
  while (yearCurrent < p) {
    yearCount += 1;
    yearCurrent = yearCurrent + Math.floor(yearCurrent * percent2) + aug;
    console.log(yearCount, yearCurrent)
  }

  return yearCount;
}

nbYear(1000,2,50,1200);