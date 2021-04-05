To conclude this part of the PEDAC process, you need to write down what the inputs and outputs for the problem are. You should also describe the rules that you must follow. The rules should encapsulate all the explicit and implicit requirements in the problem. So, you should identify what the explicit requirements are, write them down, and then repeat the process for the implicit requirements:

// input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array


Another example of Understand the Problem:

// Some questions you might have?
// 1. What is a substring?
// 2. What is a palindrome?
// 3. Will inputs always be strings?
// 4. What does it mean to treat palindrome words case-sensitively?

// input: string
// output: an array of substrings
// rules:
//      Explicit requirements:
//        - return only substrings which are palindromes.
//        - palindrome words should be case sensitive, meaning "abBA"
//          is not a palindrome.

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array

Sample Initial AlgorithM:

// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array

This algorithm is a "high-level" algorithm and it resembles those that we often see students write during interviews. It looks complete, but let's think about it for a moment: what is the hardest part of this problem? Is it looping through an array and pushing substrings that are palindromes in the result array? Is it determining whether a substring is a palindrome? Is it something else entirely?

Determining whether a word is a palindrome isn't that difficult for most students. Looping through the array and selecting all the palindromes is relatively easy as well. However, finding all the substrings for a given string can be challenging. The above algorithm doesn't tackle that issue. It lacks implementation details for the "hard" parts.

*************
IMPROVE AlgorithM
*************
To find a correct algorithm, we can simplify the problem by using a small, concrete example to determine what we need to do. For instance, we can start with a short word like halo and write all its substrings that are at least 2 characters in length. The resulting list is ['ha', 'hal', 'halo', 'al', 'alo', 'lo']. Do you see a pattern here? It's clear that some sort of complex looping is going on.


Visually, think of double looping like this:


*************************************************
'halo'

 1234     [0] to [str.length-1]         In each case, using 'halo'.substring(_,_) 
 ************************************************
 12       [0] to [str.length-3]   
 123      [0] to [str.length-2]
 1234     [0] to [str.length-1]

  23      [1] to [str.length-2]
  234     [1] to [str.length-1]
   
   34     [2] to [str.length-1]