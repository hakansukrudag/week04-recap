const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;

// Your functions will go below this line...
function calculatePriceWithQuantity(price,quantity) {
  return price * quantity;
}
const bagetTotal = calculatePriceWithQuantity(bagetPrice, bagetQuantity);
const butterTotal = calculatePriceWithQuantity(butterPrice, butterQuantity);
const milkTotal = calculatePriceWithQuantity(milkPrice, milkQuantity);

function calculateTotalPriceOfTheBasket(a, b, c) {
  return a + b + c;
}

totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(bagetTotal, butterTotal, milkTotal);

function formatThePrice(x) {
  return '£' + x.toFixed(2);
}

console.log( formatThePrice(totalPriceOfTheBasket) );

// The output should be "The total price for your basket is: £5.82"