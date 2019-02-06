const bagetPrice = 1.05;
const bagetQuantity = 2;

const butterPrice = 2;
const butterQuantity = 1;

const milkPrice = 0.86;
const milkQuantity = 2;



// Your functions will go below this line...

 function calculatePriceWithQuantity(price,quantity){
     let priceWithQuantity = price*quantity;
     return priceWithQuantity;

    }
  let bagetPriceWithQuantity = calculatePriceWithQuantity(bagetPrice,bagetQuantity);
  let butterPriceWithQuantity = calculatePriceWithQuantity(butterPrice,butterQuantity);
  let milkPriceWithQuantity = calculatePriceWithQuantity(milkPrice,milkQuantity);  


 function calculateTotalPriceOfTheBasket(item1,item2,item3){
     let totalPriceOfTheBasket =  item1+item2+item3;
    return totalPriceOfTheBasket;
 }
    let totalPriceOfTheBasket = calculateTotalPriceOfTheBasket(bagetPriceWithQuantity,butterPriceWithQuantity,milkPriceWithQuantity);

 function formatThePrice(price){
   let formatPrice = price.toFixed(2)
   return formatPrice;
 }

    console.log( formatThePrice(totalPriceOfTheBasket) );

// The output should be "The total price for your basket is: £5.82"