const originalPrice = 120
const discount = 18
const percenPriceDiscount = 100 - discount
const priceDiscount = (originalPrice*percenPriceDiscount)/100

console.log({
    originalPrice,
    discount,
    percenPriceDiscount,
    priceDiscount
});
