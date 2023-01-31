'use strict';

/*
    Створити функцію користувача, котра бере за основу userInfo та шляхом
    замикання створює новий обʼєкт, з яким можна працювати як user1().increase(100)
 */

const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++
    }
}

function user() {
    const userObj = {...userInfo};

    return function () {
        return userObj;
    }
}

const user1 = user();
user1().increase(100);
user1().increase(100);
console.log(userInfo);
console.log(user1());