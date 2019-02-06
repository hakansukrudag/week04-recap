const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;

let totalPriceOfTheBasket = 0;

// Your functions will go below this line...
function formatThePrice(poundPrice) {
	return '£' + poundPrice.toFixed(2);
}

function calculatePriceWithQuantity(itemPrice, quantity) {
	return itemPrice * quantity;
}
const bagetTotal = calculatePriceWithQuantity(bagetPrice, bagetQuantity);
const butterTotal = calculatePriceWithQuantity(butterPrice, butterQuantity);
const milkTotal = calculatePriceWithQuantity(milkPrice, milkQuantity);

function calculateTotalPriceOfTheBasket(bgt, btt, mlt) {
	return bgt + btt + mlt;
}

totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(bagetTotal, butterTotal, milkTotal);

console.log('Total Price = ' + formatThePrice(totalPriceOfTheBasket));

// The output should be "The total price for your basket is: £5.82"
