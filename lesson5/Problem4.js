/*
How would you change 3 to 4
let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
*/

let arr1 = [1, [2, 3], 4];
console.log(arr1[1][1]=4)
console.log(arr1)

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
console.log(arr2[2]=4)
console.log(arr2)

let obj1 = { first: [1, 2, [3]] };
console.log(obj1.first[2]=[4])
console.log(obj1)

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2]=4
console.log(obj2)