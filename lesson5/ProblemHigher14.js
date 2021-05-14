let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*
Rules: 
  -if fruit, return color
    - CAPITALIZE Color
  -if vegetable, return size
    - UPPERCASE size
Data Structure:
  input: Object of 5 key-value(subObjects)
  output: Array of 5 string/array
    - if fruit, subArray
    - if vegetable, string

Algorithm:
  LOOP over obj values
    if value.type = fruit
      return value.color
        Capitalize [0]
    if value.type = vegetable
      return value.size
        Upper Case All 
*/

resultArray = []

for(let item in obj) {
  console.log(item)
  if(obj[item]['type'] === 'fruit'){
    fruitAdd = obj[item]['colors']
    let fruitCap = fruitAdd.map(element => element[0].toUpperCase()+element.slice(1))
    resultArray.push(fruitCap)
  } else {
    vegetableAdd = obj[item]['size'].toUpperCase()
    resultArray.push(vegetableAdd)
  }
}
console.log(resultArray)