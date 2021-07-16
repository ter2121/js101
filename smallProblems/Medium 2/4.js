function featured (input) {

  function unique (input){
    let resultString = ''
    for(let i = 0; i < input.length; i++){
      if(resultString.includes[input[i]]){
        console.log('digits not unique')
        return false
      } else { resultString += input[i] }
    }
    console.log('unique result')
    return true
  }

  function isFeatured(input){
    if(input > 9876543201){
      console.log("There is no possible number that fulfills those requirements.")
      return false
    } else if (input % 2 === 0) {
      console.log ('Not odd')
      return false
    } else if (input % 7 != 0) {
      console.log('Not / 7')
      return false
    } else if (!unique){
      return false
    } else { 
      console.log('input')
      return true}
  }

  function local (input) {
   let test = input
   if(isFeatured(input)){console.log(`Next featured is ${isFeatured}`)}
   else {
     for(let i = 0; i < 9876543201; i++){
       test +=1
     }
     isFeatured(test)
   }
  }

  local(input)
}

featured(12);           // 21
