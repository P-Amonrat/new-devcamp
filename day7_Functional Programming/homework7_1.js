// let arr = [1,2,3,4,5,6,7,8,9,10];

// let result1 = arr.filter (number => number%2 ===0);
// console.log(result1);

// let result2 = arr.map((number) => number*1000);
// console.log(result2);





let arr = [1,2,3,4,5,6,7,8,9,10];

let number = arr.filter(x => (x % 2 === 0));
console.log(number);

let result = number.map(y => (y*1000))
console.log(result);
debugger;