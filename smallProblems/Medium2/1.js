function letterPercentages (input){
  let inStr = input;
  let resultObj = {'lowercase':0, 'uppercase':0,'neither':0};

  function helperID (input){
    for(let i=0; i < input.length; i++){
      if(input[i] >= 'a' && input[i] <= 'z'){
        resultObj.lowercase += 1
      } else if(input[i] >= 'A' && input[i] <= 'Z'){
        resultObj.uppercase += 1
      } else {resultObj.neither += 1}
    }
  }
  
  helperID(inStr);
  let lowerTotal = 100 * (resultObj.lowercase / inStr.length);
  let upperTotal = 100 * (resultObj.uppercase / inStr.length);
  let neitherTotal = 100 * (resultObj.neither / inStr.length);
  resultObj.lowercase = String(lowerTotal.toFixed(2));
  resultObj.uppercase = String(upperTotal.toFixed(2));
  resultObj.neither = String(neitherTotal.toFixed(2));

  console.log(resultObj)
}

letterPercentages('AbCd +Ef')