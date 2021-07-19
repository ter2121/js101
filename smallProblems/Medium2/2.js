function triangle (side1, side2, side3) {

function compareSides(inA,inB,inC) {
  let sortArr = [inA,inB,inC].sort((a,b) => a - b)
  if(!guardClause(inA, inB, inC)){
    console.log('invalid')
  } else if(sortArr[0] === sortArr[1] && sortArr[1] === sortArr[2]){
    console.log('equilateral')
  } else if ((sortArr[0] === sortArr[1] || sortArr[1] === sortArr[2])){
    console.log('isoceles')
  } else {
    console.log('scalene')
  }
}

function guardClause (a,b,c){
  if((a <= 0 || b <= 0 || c <= 0)){
    return false
  }
  else if(a + b <= c || a + c <= b || b + c <= a){
    return false
  } 
  else {return true}
}

compareSides(side1, side2, side3)

}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"