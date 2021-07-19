// End is Near but Not Here

/*
GOING FURTHER:
function penultimate (message) {
  arrayWords = message.split(' ');
  console.log(arrayWords)
  console.log(arrayWords[Math.round((arrayWords.length - 1) / 2)]);
}

penultimate('hello and welcome to Tacoma')

*/

function penultimate (message) {
  arrayWords = message.split(' ');
  console.log(arrayWords)
  console.log(arrayWords[arrayWords.length - 2]);
}

penultimate('hello and welcome to Tacoma')


/*
p 
  input 
    String 
  output
    Word << Array of Words << String 
e 
  empty String
  numeral 
t 

a 
  .split('')
  array[-2]

HANDLE MIDDLE OF SENTENCE WORD 
= Math.int(array.length / 2)

*/
