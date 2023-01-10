/*
    Exercise 1
    ----------
    Витягнути імʼя та прізвище в окремі змінні
 */

const userName = 'Влад aka Junior Коробко';
const firstname = userName.slice(0, userName.indexOf(' '));
const lastname = userName.slice(userName.lastIndexOf(' ') + 1, userName.length);

console.log(firstname);
console.log(lastname);




/*
    Exercise 2
    ----------
    Замаскувати все, крім останніх чотирьох символів
    const card = '2342834503458353' ----> ************8353
 */

const card = '2342834503458353';
console.log(card.slice(-4).padStart(16, '*'));

