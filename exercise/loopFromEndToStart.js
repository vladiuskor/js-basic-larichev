/*
     Вивести у консоль стрічку "Я люблю JS !" з масиву,
     проходячи циклом у зворотному порядку, не використовуючи метод reverse.
     const arr = ['!', 'JS', 'люблю', 'JS']
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const finalArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    finalArray.push(arr[i]);
}

console.log(finalArray.join(' '));

