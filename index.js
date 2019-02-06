const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

// let totalPriceOfTheBasket = 0;

// Your functions will go below this line...

function calculatePriceWithQuantity(price, quantity) {
   return price * quantity
}

const totalPriceOfBaget = calculatePriceWithQuantity(bagetPrice, bagetQuantity);
const totalPriceOfButter = calculatePriceWithQuantity(butterPrice, butterQuantity);
const totalPriceOfMilk = calculatePriceWithQuantity(milkPrice, milkQuantity);


function calculateTotalPriceOfTheBasket(totalPriceOfBaget, totalPriceOfButter, totalPriceOfMilk){
    return totalPriceOfBaget + totalPriceOfButter + totalPriceOfMilk;
}

const totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(totalPriceOfBaget, totalPriceOfButter, totalPriceOfMilk)

function formatThePrice(calculateTotalPriceOfTheBasket) {
    return 'The total price of your basket is: ' + '£' + calculateTotalPriceOfTheBasket.toFixed(2)
}
 
console.log( formatThePrice(totalPriceOfTheBasket) );


// The output should be "The total price for your basket is: £5.82"