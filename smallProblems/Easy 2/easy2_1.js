let nameArray = ['jimBob','fuller']
let infoObject = {
  title: 'Executive VP',
  occupation: 'Liquor Sales'
};

function greetings (name, jobInfo)  {
  let answer = `Hello ${name.join(' ')}! Nice to have an ${jobInfo.title} ${jobInfo.occupation} around.`;
  console.log(answer);
}

greetings(nameArray, infoObject);

// p 
//   input 
//     2 arguments: array and object 
//   output 
//     RETURN: greeting w fullName title 

// e 

// d
//   array ['jimBob','fuller']
//   object {
//     title: 'Executive VP'
//     occupation: 'Liquor Salesman'
//   }

// a
//   object.title 
//   object.occupation 
//   array.join()
  


