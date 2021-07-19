let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
let resultObject = {}


// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produce) {
  let produceInner = produce;
  for (let i = 0; i < Object.entries(produceInner).length; i++) {
    if (Object.values(produceInner)[i] === 'Fruit') {
      resultObject[i] = Object.keys(produceInner)[i]
      resultObject
    }
  }
  console.log(resultObject)

}

selectFruit(produce)

/*
input: object   // produce
output: object  // resultObject
required:
  resultObject includes key-value pairs
  selection criteria: , Object.value === 'Fruit'

algorithm:
  declare produce
  declare resultObject {}
  declare function selectFruit
  loop through produce object
    if value is 'Fruit', append it to resultObject 
  return resultObject

*/