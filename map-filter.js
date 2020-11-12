const numbers = [2, 4, 6, 7, 8, 9];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);

// }
// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element, index, array){
//     return element * element;
// })
// const result = numbers.map(x => x * x);


// console.log(result);

const bigger = numbers.filter(x => x < 5);
const isThere = numbers.find(x => x > 5);
console.log(isThere);