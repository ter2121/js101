
function century(year) {
  let result = (Math.ceil(year / 100)).toString();
  let lastDigit = result[result.length - 1];
  let secLastDigit = result[result.length - 2];

  if (secLastDigit === '1') {
    return result + 'th';
  } else {
    switch (lastDigit) {
      case '1': return result + 'st';
      case '2': return result + 'nd';
      case '3': return result + 'rd';
      default: return result + 'th';
    }
  }
}

century(11201)