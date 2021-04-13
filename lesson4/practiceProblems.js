// got #1 (all truthy so [1,2,3])
// also got #2 as all undefined as no return statement in arrow expression
// got 3 too
// #4 I missed
    // CHAINED METHODS - - they refer to the RETURN VALUE of what they are chained to, not the original value

// #7 When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.
    // interesting to note that undef and a number are returned in a new array, undef b/c the first element doesn't meet the if condition for a return value

/* #8

input Array
output object 
REQUIRED
  returnObject [KEY(arrayElementName) Value(arrayIndex)]

ALGO
  set inputArray
  set returnObject
  LOOP
    < inputArray.length
    Assign returnObject value = inputArray.indexAt(i)
    Assign returnObject key = inputArray[i]
    


let inputArray = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let returnObject = {}

for (let i = 0; i < inputArray.length; i++) {
  returnObject[i] = inputArray[i]
  }
console.log(returnObject)
*/
// COPY OUT INTO JS BOOK//

let inputObject = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// I WAS HAVING TROUBLE ADDING AN INITIAL VALUE B?C I DIDN"T SKIP A LINE AND ADD BRACKETS (tried to do it all on 1 line)
console.log(Object.values(inputObject).reduce((a,b) => {
  return a + b
}, 0))


//#10
USING SPREAD SYNTAX:
> let ages = {
  ...   Herman: 32,
  ...   Lily: 30,
  ...   Grandpa: 5843,
  ...   Eddie: 10,
  ...   Marilyn: 22,
  ...   Spot: 237
  ... };
  undefined
  > values = Object.values(ages)
  [ 32, 30, 5843, 10, 22, 237 ]
  > Math.min(...values)
  10
  
  https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript

  https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

  https://www.freecodecamp.org/news/reduce-f47a7da511a9/

  REREAD #11
  https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2



  REVIEW
  JSBOOK

  In the definition of a function, the names between parentheses are called parameters. The arguments are the values of those parameters.

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are local variables; they are only defined locally, within the body of the function.

You can name functions and parameters with any valid variable name. However, you should use meaningful, explicit names that follow the same naming conventions we discussed earlier. In the above example, we name the parameter words since the say function expects the caller to pass in some words. Other suitable names might be sentence or text.

Programmers often talk about function invocation and invoking functions. The terms are synonymous with "call" and "calling." You invoke a function or write a function invocation. We use these terms as well.

The local variable names between parenthesis (()) are properly called parameters, not arguments. Arguments are the values you pass into the function for each of those parameters. The parameter values inside the function are also called arguments. You can think of parameters as placeholders, while arguments refer to the values that get stored in the placeholders.


Return Values

All of the functions we've written so far display text on the console. They can do much more. One common use case is to perform an operation and return a result to the call location for later use. We do that with return values and the return statement.

All JavaScript function calls evaluate to a value. By default, that value is undefined; this is the implicit return value of most JavaScript functions. However, when you use a return statement, you can return a specific value from a function. This is an explicit return value. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a return statement.

When JavaScript encounters the return statement, it evaluates the expression, terminates the function, and returns the expression's value to the location where we called it.

Let's capture the return value in a variable and log it to the console to verify that:

Functions that always return a boolean value, i.e., true or false, are called predicates. You will almost certainly encounter this term in future readings and videos, so commit it to memory.


That brings us to another important property of local variables. Local variables are short-lived; they go away when the function that corresponds to their scope stops running. When we invoke the function, we start a new scope. If the code within that scope declares a new variable, that variable belongs to the scope. When the last bit of code in that scope finishes running, the scope goes away, as do any local variables declared within it. JavaScript repeats this process each time we invoke a function.

Thus far, we've talked about variables scoped to a function definition. Another way to scope variables locally is to use block-scoping. We've already discussed it in the Variables chapter, and we'll expand on it in the next. For now, block scoping occurs when you use let or const inside a block and confines the variable's scope to that block.


FUNCTION COMPOSITION 
Passing the function call's return value to console.log is the canonical example of function composition in JavaScript. It's useful but uninteresting. Life gets more interesting when you pass function call results to a function that does something more complicated:

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))

Here, we pass the return values of add(20, 45) and subtract(80, 10) to the times function, and we pass the return value of times to console.log! It produces the same result as the following verbose code:


FUNCTION DeCLARATION VS expressionThat might look a little strange, but it's JavaScript that you'll see often. Most of it looks like a standard function declaration. However, since we're saving it to a variable, it's a function expression instead. Function expressions have one key difference from a function declaration: you cannot invoke a function expression before it appears in your program.
ONE:
greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}
TWO:
let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();


********
Any function definition that doesn't have the word function at the very beginning of a statement is a function expression. Even wrapping what looks like a function declaration in parentheses creates a function expression:

(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});
