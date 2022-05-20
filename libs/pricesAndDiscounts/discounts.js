function calPriceDiscount(price, discount){
    const percenPriceDiscount = 100 - discount
    const priceDiscount = (price*percenPriceDiscount)/100
    return priceDiscount
}

function finalPrice(){
    const inputPrice = document.getElementById("inputPrice")
    const inputDiscount = document.getElementById("inputDiscount")
    const resultPrice = document.getElementById("resultPrice")

    const price = inputPrice.value
    const discount = inputDiscount.value
    
    resultPrice.innerText = `Final price: ${calPriceDiscount(price, discount)}`
    console.log(typeof(price))
}
