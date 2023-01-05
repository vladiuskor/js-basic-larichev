//Function declaration
// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     }
// }
//
// const powerOfTwo = power(2);
// console.log(powerOfTwo(3));

//Arrow function
const power = pow => num => num ** pow;
const powerOfTwo = power(2);
console.log(powerOfTwo(5));