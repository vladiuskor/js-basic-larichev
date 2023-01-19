/*
    Exercise 1
    ----------
    Реалізувати методи збільшення та зменшення балансу,
    де кожна операція зберігається в масив operations у вигляді {reason: 'Оплата податків', sum: -100}.
    Повертає true, якщо успішно та false - якщо не вистачає балансу.
    Також реалізувати метод виводу числа операцій по гаманцю.
 */

const wallet = {
    balance: 0,
    operations: [],
    checkBalance: function () {
        console.log(`Баланс гаманцю: ${this.balance}`);
    },
    makeExpenses: function (reason, sum) {
        if(sum > this.balance ) {
            console.log(`Операція неможлива. Недостатньо коштів для ${reason}`);
            return false;
        }

        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum
        });
        console.log(`Операція успішна`, this.operations.at(-1));
        return true;
    },
    makeProfit: function (reason, sum) {
        this.operations.push({
            reason: reason,
            sum: sum
        });
        this.balance += Number(sum);
        console.log(`Операція успішна`, this.operations.at(-1));
        return true;
    },
    showOperationsQuantity: function () {
        console.log(`Кількість операцій по гаманцю: ${this.operations.length}`);
    }
};

wallet.makeProfit('Passive income', 700);
wallet.makeProfit('Elena salary', 1300);
wallet.makeProfit('Vlad salary', 3300);

wallet.makeExpenses('Buy Macbook pro 14 m2pro', 4000);

wallet.showOperationsQuantity();
wallet.checkBalance();
