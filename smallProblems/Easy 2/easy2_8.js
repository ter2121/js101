// odd list

/*
p 
  input Array
  output oddArrayElements << array.[0], array.[2], array.[4] etc
e 
  Loop
    For
      index % 2 === 0
      oddArrayElements.push()
t 
  undefined, null, 0, empty array
a
  
*/

arraySample = ['hi','bear','seven',7,null,undefined,undefined,undefined,'funny',true]
newOddArrayElement = []

function oddities(array){
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newOddArrayElement.push(array[i])
    }
  }
}

oddities(arraySample);
console.log(newOddArrayElement)