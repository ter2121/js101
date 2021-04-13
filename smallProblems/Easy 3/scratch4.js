Key to the new key/value object 
is to create an array of keys and then use those as counters to loop through original array 


// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// select key-value pairs w value 'Fruit'
/* 
input Object
output Object // limit 'Fruit'
required:

algorithm
  declare resultObject = {}
  create function selectFruit
    Loop through argument(produceList)
      Selection Criteria: key-values, value === 'Fruit'
        Get keys
          produceKeys = Object.keys(produceList)
        Get values
          counterKey = produceKeys[i]
          counterValue = produceList[counterKey]
        For ... produceKeys.length...
          if (produceValue === 'Fruit')
            resultObject[counterKey] = counterValue
    Append to resultObject
  Return resultObject
  */

  input Array
  output Array
  required 
    explicit odd index elements * 2
            even index elements no change

  Algorithm
    Set myNumbers = [1, 4, 3, 7, 2, 6];
    Set resultArray = []

    Loop
      Start 0, myNumbers.length, i++
        If i % 2 != 0 
          myNumbers[i] * 2
          append to resultArray
        Else 
          append to resultArray 
    return Result Array


    NOTES
Array methods

forEach is functionally equivalent to for or while loop
forEach is a method that is called on the array. The method takes a function as an argument -- the () => {...} component. Here, we're using an arrow function for its simplicity. A function expression provided to another function/method as an argument is often called a callback.

Array.prototype.forEach also passes a second argument, the index position of the element in the array, to the callback function. Thus far, we haven't accepted a second argument, but we can do that. Even though forEach provides more than one argument to our callback, our callback doesn't have to use those arguments if it doesn't need them. Let's see an example of how we can use the index argument in the callback function:

forEach w Strings 
forEach with Strings

JavaScript strings don't have a forEach method. However, we can leverage the String.prototype.split method to process every character in a string with forEach. Let's say that we want to iterate over all characters in a string and log them to the console using forEach; we can do so in the following manner:
'abcd'.split('').forEach(char => {
  console.log(char);
});
// logs
// a
// b
// c
// d


      -
      forEach with Objects

      Objects in JavaScript don't have the forEach method. However, as we said earlier, the Object.keys, Object.values, and Object.entries methods readily convert objects into arrays for us, which we can then use with the forEach method. Let's say that we want to iterate over all values in an object and log them to the console using forEach; we can do so in the following manner:
      
      let produce = {
        apple: 'Fruit',
        carrot: 'Vegetable',
        pear: 'Fruit',
        broccoli: 'Vegetable'
      };
      
      let produceValues = Object.values(produce);
      
      produceValues.forEach(value => {
        console.log(value);
      });
      // logs
      // Fruit
      // Vegetable
      // Fruit
      // Vegetable


      DESTRUCTURING
      We can also get all of the key-value pairs of an object with Object.entries:

let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

As we've seen before, Object.entries returns all the key-value pairs of an object in an array. Each key-value pair is represented by an array of two elements where the first element is the key and the second element is the value. The forEach method then iterates over the array, passing in each key-value pair as the argument to the callback. The keyValue parameter captures that argument.

What's happening on line 9, though?

let [ key, value ] = keyValue;

This code demonstrates what we call array destructuring assignment. In an array destructuring assignment, we can assign elements of the array to multiple variables by wrapping the variable names in brackets. The first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on. We can rewrite that line without array destructuring assignment as follows:


*****
We can rewrite that line without array destructuring assignment as follows:

let key = keyValue[0];
let value = keyValue[1];

We will discuss destructuring in more detail in a later course. For now, all you need to know is that you can assign the elements of an array to individual variables as shown above.
**********

### forEach returns undefined
forEach is just a method call, and methods in JavaScript always return something, even if it's undefined. The return value of forEach isn't important since the sole purpose of forEach is iteration. It just performs some action on each element. What the method returns isn't significant. However, we'll see some other array methods where the return value is significant.

To perform the selection, filter examines the return value of the callback on each iteration. It determines the truthiness of the return value. There's only one thing that filter cares about concerning the callback's return value: whether it is truthy or falsy. Note that truthy and falsy are not the same as true and false.

JavaScript treats six values as falsy: undefined, null, NaN, 0, '', and false. All other values are truthy values. That's not the same as saying that everything that is truthy is also true or that everything that is falsy is also false. The values true and false are the two JavaScript values that make up its Boolean type; truthy and falsy aren't values that belong to a specific JavaScript type but are simply a classification of which values JavaScript recognizes as representing truth or falsity.

Note that the body of the callback function in the above example is a single expression. That means that we can eliminate the curly braces and the return keyword, and it'll still work:

[1, 2, 3].filter(num => num % 2 === 1); // => [ 1, 3 ]

This code provides a much more succinct way to do things. It's the preferred approach if your callback has a simple one-line selection criterion.

///////////////////////////////////
FILTER AND RETURN:
When working with filter, you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget to write an explicit return, how will that affect the return value of filter?

> [1, 2, 3].filter(num => {
...   num + 1;
... })
[]

filter now returns an empty array. Why is that? Since our callback doesn't explicitly return a value, its implicit return value is undefined. Since undefined is falsy, filter won't select any elements.


FILTER DOES NOT WORK WELL WITH OBJECTS -- USE FOR EACH WITH SELF_WRITTEN FILTER INSTEAD
Oh, that's better. This code is much more succinct than the previous code. It seems like forEach is better suited to filtering an object than using a combination of forEach and filter.


/////////////////////////////////////////////
Array.prototype.map

As with filter, map also considers the return value of the callback. The main difference between these two methods is that map uses the return value of the callback to perform transformation instead of selection.

What happens if we write some code in the callback that's not a transformation instruction?

[1, 2, 3].map(num => num % 2 === 1);

The key here is to remember that map always performs transformation based on the return value of the callback. In this case, the return value of the callback is boolean. Thus, map returns an array of booleans.

What will map return in this example?

[1, 2, 3].map(num => {
  num * 2;
});

It's a little tricky, but you should now have all the necessary information to evaluate this code. Take a few minutes to deconstruct the above example and try to determine the return value of the code above.

By looking at the last expression within the callback, we know that the return value of the callback will always be undefined since it's a callback with curly braces and without an explicit return value. map doesn't care about truthiness, and takes this return value as the transformation criterion. Therefore, the array returned by map is a new array of undefined values.

> [1, 2, 3].map(num => {
...   num * 2;
... })
[ undefined, undefined, undefined ]

///////////////////////////////////////
filter and map with Strings

As with forEach, JavaScript strings don't have filter or map methods. However, we can use the String.prototype.split technique that we showed earlier together with Array.prototype.join to use filter and map on the characters in a string.

For instance, suppose we want to select all of the vowels in a string and get a new string that contains all of those vowels, and nothing else. We can use split, filter, and join like so:

let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'

///////////////////////////////////////////
Summary

Methods like forEach, filter, and map are provided by JavaScript to allow for simpler implementations of common collection manipulation tasks. Using these methods to iterate, select, and transform a collection is preferred over manually looping.

To further clarify your understanding of these methods and how they work, use the following table as a reference:
Method 	Action 	Considers the return value of the callback? 	Returns a new array from the method? 	Length of the returned array
forEach 	Iteration 	No 	No, it returns undefined 	N/A
filter 	Selection/Filtering 	Yes, its truthiness 	Yes 	Length of original or less
map 	Transformation 	Yes 	Yes 	Length of original

These methods each use the callback's return value in different ways. In the case of forEach, the return value of the callback is simply ignored. Before moving forward, it is crucial to understand how these methods use the callback's return value to perform their intended task.


/////////////////////////////////////////
Array.prototype.includes

Unlike the methods we've described so far, includes doesn't take a callback argument. Instead, it takes an argument that it looks for in the array used to call it: it returns true when the argument exists in the array and false when it doesn't.

> [2, 1, 3].includes(1)
true

> [2, 1, 3].includes(5)
false

The includes method doesn't work when you want to check the existence of an object in an array, at least not in the way you'd expect.

let arr = ['a', 'b', {c: 'foo'}];
arr.includes({c: 'foo'}); // => false

You might expect a return value of true from the includes call above, but it returns false. That's because includes uses the === operator to compare its argument with elements of the array. Since the comparison {c: 'foo'} === {c: 'foo'} returns false, arr.includes({c: 'foo'}) also returns false in the above example.

The following includes call returns true since we're checking for the existence of the same object, and not an object with the same key-value pairs: