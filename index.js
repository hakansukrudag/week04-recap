const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;

// Your functions will go below this line...

function calculatePriceWithQuantity(a, b, c, d, e, f) {
    return calculatePriceWithQuantity = (bagetPrice * bagetQuantity) + (butterPrice * butterQuantity) + (milkPrice * milkQuantity)
}

var priceWithQuantity = calculatePriceWithQuantity(bagetPrice, bagetQuantity, butterPrice, butterQuantity, milkPrice, milkQuantity)

function formatThePrice(calculatePriceWithQuantity) {
    return 'The total price of your basket is: ' + '£' + calculatePriceWithQuantity.toFixed(2)
}


console.log( formatThePrice(priceWithQuantity) );


// The output should be "The total price for your basket is: £5.82"