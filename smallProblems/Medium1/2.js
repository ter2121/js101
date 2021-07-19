function rotation (input1,input2) {
  let count = input2;
  let number = String(input1);
  numBase = number.slice(0,number.length-count);
  numEnd = number.slice(number.length-count)
  rotateEnd = numEnd.slice(1)+numEnd[0]
  console.log(count,numBase,numEnd,rotateEnd)
  console.log(Number(numBase+rotateEnd))
}

rotation(735291, 6)