function factors(number) {
  let divisor = 1;
  let factors = [];
 if(number === 0 || number < 0) {
    console.log('Please enter a value greater than 0')
  } else {
    while (divisor < number){
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor += 1;
    }
    console.log(factors.reverse())
  }
}

factors(30);
factors(-30)


