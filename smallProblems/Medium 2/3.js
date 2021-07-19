function triAngles (angleA, angleB, angleC) {

  function guardHelper(inA, inB, inC) {
    if(inA+inB+inC != 180 || (inA <= 0 || inB <= 0 || inC <= 0)){
      console.log('invalid')
      return false
    } else {return true}
  }

  function idTriangle(inA, inB, inC) {
    if(guardHelper(inA,inB,inC)){
      if(inA === 90 || inB === 90 || inC === 90) {
        console.log('right')
        return 'right'
      } else if(inA > 90 || inB > 90 || inC > 90) {
          console.log('obtuse')
          return 'obtuse'
      } else {console.log('acute')}
    }
  }

  idTriangle(angleA, angleB, angleC)
}

triAngles(60, 70, 50);       // "acute"
triAngles(30, 90, 60);       // "right"
triAngles(120, 50, 10);      // "obtuse"
triAngles(0, 90, 90);        // "invalid"
triAngles(50, 50, 50);       // "invalid"