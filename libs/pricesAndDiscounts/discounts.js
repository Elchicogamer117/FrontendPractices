function calPriceDiscount(price, discount){
    const percenPriceDiscount = 100 - discount
    const priceDiscount = (price*percenPriceDiscount)/100
    return priceDiscount
}

function finalPrice(){
    const inputPrice = document.getElementById("inputPrice")
    const inputDiscount = document.getElementById("inputDiscount")
    const inputCoupon = document.getElementById("coupon")
    const resultPrice = document.getElementById("resultPrice")

    const price = inputPrice.value
    let discount 
    if (inputDiscount.value == ""){
        discount = 0
    }
    else {
        discount = parseFloat(inputDiscount.value)
    }
    const coupon = parseFloat(inputCoupon.value)
    const totalDiscount = discount + coupon
    
    resultPrice.innerText = calPriceDiscount(price, totalDiscount)
    console.log(inputDiscount.value)
    console.log(discount)

}
