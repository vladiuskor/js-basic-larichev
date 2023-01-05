/*
    Є дані операцій користувача
    const operations = [1000, -700, 300, -500, 10000];
    та початковий баланс 100$
    Необхідно створити функції розрахунку:
        - фінального балансу
        - наявності відʼємного балансу (якщо після чергової операції баланс < 0, то виводити false)
        - розрахунку середніх витрат та прибутку
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function getFinalBalance(startMoney, arr) {
    let finalBalance = startMoney;

    for (let elem of arr) {
        finalBalance += elem;
    }
    console.log(`Фінальний баланс: ${finalBalance}$`);
    return finalBalance;
}

function checkNegativeBalance(startMoney, arr) {
    let balance = startMoney;
    let isOk = true;

    for (let elem of arr) {
        balance += elem;

        if(balance < 0) {
            isOk = false;
            break;
        }
    }

    console.log(`Негативний балан: ${ isOk ? 'Відсутній' : 'Присутній'}`);
    return isOk;
}

function getAverageIncomeAndLoss(arr) {
    let averageIncomeMoney = 0;
    let incomeOperationsQuantity = 0;

    let averageLossMoney = 0;
    let loseOperationQuantity = 0;

    for (let i = 0; i < arr.length; i++ ) {
        if(arr[i] < 0) {
            averageLossMoney += arr[i];
            loseOperationQuantity++
            continue;
        }

        averageIncomeMoney += arr[i];
        incomeOperationsQuantity++
    }

    console.log(`Середній прибуток: ${Math.round(averageIncomeMoney / incomeOperationsQuantity * 100) / 100}$`);
    console.log(`Середній збиток: ${Math.round(averageLossMoney / loseOperationQuantity * 100) / 100}$`);
}

getFinalBalance(startBalance, operations);
checkNegativeBalance(startBalance, operations);
getAverageIncomeAndLoss(operations);

