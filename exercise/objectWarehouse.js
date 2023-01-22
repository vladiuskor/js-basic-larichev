/*
    Exercise 1
    ----------
    Створити обʼєкт-склад з методами додавання товарів на склад, пошуку товару на складі, та розрахунок ваги
 */

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(g => g.id === id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id);

        if(existedGood) {
            console.log('Цей товар вже на складі!');
            return;
        }

        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, elem) => {
            return acc += elem.weight?.kg ? elem.weight.kg : 0;
        }, 0);
    }
};

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
};

const paper = {
    id: 3,
    color: 'red'
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);

console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());

console.log(warehouse)