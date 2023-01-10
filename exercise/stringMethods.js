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