const deposit = 12000;
const percentPerYear = 0.07;
const housePrice = 13500;
const duration = 24;

let finalAmount = deposit * (1 + percentPerYear/12 ) ** duration;

if (finalAmount >= housePrice) {
    console.log(`You can buy this house. You will have ${Math.round((finalAmount - housePrice) * 100) / 100} dollars after after payment.`);
} else {
    console.log(`You cant buy this house, because you have only ${Math.round(finalAmount * 100) / 100} dollars and house price is ${housePrice} dollars.`);
}