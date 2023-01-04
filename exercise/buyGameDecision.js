const balance = 100;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = false;


if( (balance >= 1000 || bonusBalance >= 100) && isSelling && !isBanned && !isExist) {
    console.log('You can buy this game!');
} else {
    console.log(`You can't buy this game`);
}