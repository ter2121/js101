function rotation (input) {

  helperGuard(input)
  let inArr = input.slice()
  let initial = inArr[0]
  let final = inArr[inArr.length-1]
  inArr[0] = final
  inArr[inArr.length-1] = initial
  console.log(inArr,input)

  function helperGuard(input){
    if(Array.isArray(input)===false){
      console.log(undefined)
      return undefined
    }
    else if(input.length === 0){
      console.log([node])
      return []
    }
    else return input
  }
}

rotation([1,2,3,4])