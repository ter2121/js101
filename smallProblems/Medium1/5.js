function table (input) {
  let inStr = input;
  let inArr = inStr.split(' ');
  console.log(inArr)
  const NUM_WORDS = {
    zero:  0,
    one:   1,
    two:   2,
    three: 3,
    four:  4,
    five:  5,
    six:   6,
    seven: 7,
    eight: 8,
    nine:  9,
  };
  let keysArr = Object.keys(NUM_WORDS)
  let resultArr = []
  for (let i = 0; i < inArr.length; i++){
    if (keysArr.includes(inArr[i])){
      resultArr.push(NUM_WORDS[inArr[i]])
    }
    else {
      resultArr.push(inArr[i])
    }
  }
  let outputStr = resultArr.join(' ')
  console.log(outputStr)
}

table('Please call me at five five five one two three four. Thanks.'
)