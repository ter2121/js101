// Required:
// Age >= 20
// Age <= 120

// input none 
// output String + Int 

function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let answer = Math.floor(Math.random()*(max-min+1)+min);
  return answer;
}


console.log(`Teddy is ${getRandom(120,20)} years old`)