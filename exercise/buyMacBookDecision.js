const userData = {
    age: 25,
    job: true,
    money: 1999
}

function canYouBuyDevice (user, devicePrice = 2000) {
    let moneyForDevice = user.money + getCredit(user.age, user.job);
    return checkMoney(moneyForDevice, devicePrice);
}

function getCredit(age, job) {
    if(age > 24 && job) return 500;
    if(age > 24) return 100;
    return 0;
}

function checkMoney (quantity, devicePrice) {
    return quantity >= devicePrice;
}

console.log(canYouBuyDevice(userData));