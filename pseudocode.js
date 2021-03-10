arrayOfStrings = ['cat','hat','dog']

function concatString (arrayOfStrings) {
  let concatString = ''
  for(let i = 0; i < arrayOfStrings.length; i++) {
      concatString += arrayOfStrings[i]
  }
  console.log(concatString)
}

concatString(arrayOfStrings)