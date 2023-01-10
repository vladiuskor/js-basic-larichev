/*
    Exercise 1
    ----------
    Наявний масив зміни цін prices, де всередині 1-ий елемент масиву є ціною у момент Х,
    2-ий - ціною в момент У.
    Необхідно перетворити данні у масив, де будуть показані тільки позитивні зміни цін: [100, 150]
 */

const prices = [
    [100, 200],
    [120, 100],
    [200, 350]
];

let resultExercise1 = prices.map(elem => {
   return elem[1] - elem[0]
}).filter(elem => elem > 0)

console.log('Результат першого завдання:', resultExercise1);


/*
    Exercise 2
    ----------
    Знайти середнє значення послідовності чисел за допомогою reduce
 */

const arr = [1, 4, 4, 10];
const average = arr.reduce((acc, value, index) => {
    if(index !== arr.length - 1) {
        return acc + value;
    } else {
        return (acc + value) / arr.length;
    }
}, 0);

console.log('Результат другого завдання:', average);