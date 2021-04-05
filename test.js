let word = 'halo'
let returnArray = []
for (let i = 1; i < word.length; i++) {
  returnArray.push(word.substring(0,i));
}
console.log(returnArray)